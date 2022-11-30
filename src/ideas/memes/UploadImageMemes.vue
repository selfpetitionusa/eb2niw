<template>
    <div class="container" style="padding-top: 4rem; padding-bottom: 4rem">
        <div id="meme">

            <canvas id="canvas" v-bind:width="width" v-bind:height="height" style="margin-bottom: 1rem"></canvas>

            <div class="row">
              <div class="col-sm-6">
                  <!-- Image settings -->
                  <div class="form-group" style="margin-bottom: 2rem">
                    <label for="image" class="control-label" style="margin-right: 10px">
                        Upload custom image:
                    </label>
                    <input type="file" id="image" @change="onFileChange">
                  </div>

                  <div class="form-group">
                    <label for="width" class="control-label">
                        Image width
                    </label>
                    <input type="number" id="width" v-model="width" class="form-control">
                  </div>

                  <div class="form-group">
                    <label for="height" class="control-label">
                        Image height
                    </label>
                    <input type="number" id="height" v-model="height" class="form-control">
                  </div>
              
              
                  <!-- Text settings -->
                  <div class="form-group">
                    <label for="text" class="control-label">
                        Add text
                    </label>
                    <textarea id="text" v-model="text" class="form-control" rows="8" @keyup="onTextChange" placeholder="Write your text"></textarea>
                  </div>

                  <div class="row">                  
                    <div class="form-group col-sm-3">
                      <label for="textStrokeStyle" class="control-label" style="margin-right: 5px">
                          Stroke
                      </label>
                      <input type="color" id="textStrokeStyle" v-model="textStrokeStyle" @change="onTextChange">
                    </div>

                    <div class="form-group col-sm-3">
                      <label for="textFillStyle" class="control-label" style="margin-right: 5px">
                          Fill
                      </label>
                      <input type="color" id="textFillStyle" v-model="textFillStyle" @change="onTextChange">
                    </div>
                  </div>
              </div>
            </div>

            <div class="row" style="margin-top: 2rem; margin-bottom: 3rem">
              <a class="col-sm-3 btn btn-primary btn-register btn-profile" download="Meme.png" @click="download" id="download" href="#" style="margin-right: 10px">Download</a>
              <button type="button" class="btn btn-primary btn-assess" @click="reset">Reset</button>
            </div>

        </div>
    </div>
</template>

<script>

// https://github.com/rozklad/vue-meme-generator

  CanvasRenderingContext2D.prototype.wrapFillText = function (text, x, y, maxWidth, lineHeight) {

      var lines = text.split("\n");
    
      for (var i = 0; i < lines.length; i++) {
    
        var words = lines[i].split(' ');
        var line = '';
    
        for (var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = this.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            this.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
    
        this.fillText(line, x, y);
        y += lineHeight;
      }
  };
  
  CanvasRenderingContext2D.prototype.wrapStrokeText = function (text, x, y, maxWidth, lineHeight) {
  
    var lines = text.split("\n");
  
    for (var i = 0; i < lines.length; i++) {
  
      var words = lines[i].split(' ');
      var line = '';
  
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = this.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          this.strokeText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        }
        else {
          line = testLine;
        }
      }
  
      this.strokeText(line, x, y);
      y += lineHeight;
    }
  };

  export default {
    name: '#meme',
    data() {
        return {
            canvasElementId: 'canvas',
            width: 600,
            height: 400,
            image: '',
            presets: [
                '../resources/meme1.jpg',
                'assets/meme2.jpg'
            ],
            text: '',
            textMaxWidth: 250,
            textStrokeStyle: '#000000',
            textFillStyle: '#FFFFFF',
            textLineWidth: 2,
            textPosition: {
                x: 20,
                y: 60
            },
            textFont: '48px "Impact", sans-serif',
            textLineHeight: 60
        }
    },
    methods: {
  
      onFileChange: function(event) {
        var files = event.target.files || event.dataTransfer.files;
  
        if (!files.length)
          return;
  
        this.createImage(files[0]);
      },
  
      onTextChange: function() {
        this.repaint();
  
      },
  
      createImage: function(file) {
        var reader = new FileReader();
        var vm = this;
  
        reader.onload = function(event) {
          vm.image = event.target.result;
          vm.repaint();
        };
  
        reader.readAsDataURL(file);
      },
  
      setImageToCanvas: function(url, callback) {
  
        var ctx = this.getContext();
        var background = new Image();
        background.src = url;
        background.onload = function() {
          ctx.drawImage(background, 0, 0);
          if ( typeof callback == 'function' ) {
            callback();
          }
        };
      },
  
      setTextToCanvas: function(text) {
  
        var context = this.getContext();
        context.font = this.textFont;
        context.fillStyle = this.textFillStyle;
        context.wrapFillText(text, this.textPosition.x, this.textPosition.y, this.textMaxWidth, this.textLineHeight);
        context.strokeStyle = this.textStrokeStyle;
        context.lineWidth = this.textLineWidth;
        context.wrapStrokeText(text, this.textPosition.x, this.textPosition.y, this.textMaxWidth, this.textLineHeight);
  
      },
  
      getContext: function() {
  
        return document.getElementById(this.canvasElementId).getContext("2d");
  
      },
  
      repaint: function() {
  
        var vm = this;
  
        if ( this.image == '' )
          this.setTextToCanvas(this.text);
  
        this.setImageToCanvas(this.image, function(){
          vm.setTextToCanvas(vm.text);
        });
  
      },
  
      reset: function () {
        this.image = '';
        this.text = '';
        this.width = 600;
        this.height = 450;
        this.textStrokeStyle = '#000000';
        this.textFillStyle = '#FFFFFF';
        this.repaint();
        this.getContext().clearRect(0, 0, this.width, this.height);
      },
  
      download: function() {
        var dt = document.getElementById(this.canvasElementId).toDataURL('image/png');
  
        /* Change MIME type to trick the browser to download the file instead of displaying it */
        dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
  
        /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
        dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Meme.png');
  
        document.getElementById('download').href = dt;
      },
    }
  }

</script>