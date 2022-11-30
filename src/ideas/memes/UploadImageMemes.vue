<template>
  <div class="container" style="padding-top: 4rem; padding-bottom: 4rem">
    <div id="meme">

      <canvas id="canvas" v-bind:width="width" v-bind:height="height" style="margin-bottom: 1rem"></canvas>

      <!-- Image settings -->
      <div class="row">
        <div class="col-sm-6">
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
        </div>
      </div>


      <!-- Photo crop -->
      <div class="row" style="margin-top: 4rem;">
        <div class="col-12">
          <div class="container" style="background-color: #eee; padding-top: 2rem">
            <div class="row justify-content-md-center">
              <div class="col-xs-12 col-md-6">
                <vue-croppie
                    ref="croppieRef"
                    :enableOrientation="true"
                    @result="result"
                    :boundary="{height: 350, width: 350}"
                    :viewport="{ width:250, height:250, 'type':'circle' }"
                    @update="update"
                    :croppieInitialized="croppieInitialized">
                </vue-croppie>
              </div>
              <div class="col-xs-12 col-md-6">
                <img width="350" :src="cropped" alt="" class="rounded mx-auto d-block img-thumbnail" style="min-height: 350px;">
              </div>
            </div>
          </div>
          
          <div class="row mt-5 mb-5">
            <div class="col-xs-12 col-md-12 text-left">
              <button class="btn btn-dark" @click="bind()" style="margin-right: 5px">Bind</button>
              <button class="btn btn-dark" @click="rotate(+90)" style="margin-right: 5px">Rotate Left</button>
              <button class="btn btn-dark" @click="rotate(-90)" style="margin-right: 5px">Rotate Right</button>
              <button class="btn btn-dark" @click="crop()">Crop</button>
            </div>
          </div>
        
        </div>
      </div>

        
      <!-- Text settings -->
      <div class="row" style="margin-top: 4rem">
        <div class="col-sm-6">
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
    mounted () {
      // Upon mounting of the component, we accessed the .bind({...})
      // function to put an initial image on the canvas.
      this.$refs.croppieRef.bind({
        url: 'http://i.imgur.com/Fv2YOM6.jpg'
      })
      setTimeout(() => {
        this.crop()
      }, 1000)
    },
    data() {
        return {
            cropped: null,
            images: [
              'http://i.imgur.com/fHNtPXX.jpg',
              'http://i.imgur.com/ecMUngU.jpg',
              'http://i.imgur.com/7oO6zrh.jpg',
              'http://i.imgur.com/miVkBH2.jpg',
              'http://i.imgur.com/Fv2YOM6.jpg'
            ],
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

      bind() {
        // Randomize cat photos, nothing special here.
        let url = this.images[Math.floor(Math.random() * this.images.length)];
        // Just like what we did with .bind({...}) on 
        // the mounted() function above.
        this.$refs.croppieRef.bind({
          url: url,
        });
      },

      // CALLBACK USAGE
      crop() {
        // Here we are getting the result via callback function
        // and set the result to this.cropped which is being 
        // used to display the result above.
        let options = {
          format: 'jpeg'
        }
        this.$refs.croppieRef.result(options, (output) => {
          this.cropped = output;
        });
      },

      // EVENT USAGE
      cropViaEvent() {
        this.$refs.croppieRef.result(this.options);
      },

      result(output) {
        this.cropped = output;
      },

      update(val) {
        console.log(val);
      },

      rotate(rotationAngle) {
        // Rotates the image
        this.$refs.croppieRef.rotate(rotationAngle);
      },

      croppieInitialized() {
        // This method will be executed when the croppie is initialized
        // You can use it to set the image
        // this.$refs.croppieRef.bind({
        //   url: 'http://i.imgur.com/Fv2YOM6.jpg',
        // });
        console.log('Croppie was initialized');
      },
  
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