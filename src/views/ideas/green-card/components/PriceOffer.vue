<template>

    <div class="pricing-table col-xl-6 col-md-8 col-12 offset-xl-3 offset-md-2 offset-0" style="margin-top: 6rem; padding-top: 1.5rem; padding-left: 0px; padding-right: 0px">
        <div class="price" style="margin-bottom: 0;">
            <span v-if="secondCount > 0" style="color: #0b5345;"><sup>$</sup>169</span>
            <span v-if="secondCount <= 0" style="color: #0b5345;"><sup>$</sup>225</span>
        </div>
        <div v-show="secondCount > 0" class="price" style="margin-bottom: 0.5rem;">
            <sup style="color: #b30000; font-size: 15px;">$</sup><span style="color: #b30000; font-size: 20px; text-decoration: line-through">225</span>
        </div>

        <div v-if="secondCount <= 0" class="row banner-action-btns" style="text-align: center; margin-top: 1rem">
            <div class="col-xl-7 col-lg-9 col-12">
                <a href="https://buy.stripe.com/7sI5nU0pp3wpcvefYZ" @click="gtag_report_conversion()" class="btn btn-primary">Buy Templates <br>+ Lifetime Discord access</a>
            </div>
        </div>
        <div v-if="secondCount > 0" class="row banner-action-btns" style="text-align: center; margin-top: 1rem">
            <div class="col-xl-7 col-lg-9 col-12">
                <a href="https://buy.stripe.com/bIY17Eb433wp9j2bIK"  @click="gtag_report_conversion()" class="btn btn-primary">Buy Templates <br>+ Lifetime Discord access</a>
            </div>
        </div>

        <div v-show="secondCount > 0">
            <div style="margin-top: 1rem; font-size: 12px">Valid for:</div>
            <div style="font-size: 18px">
                <span style="font-weight: 600" v-if="days > 0">{{ days }}</span><span v-if="days > 0"> day</span><span v-if="days > 1">s</span>
                <span style="font-weight: 600"> {{ hours }}</span>h :
                <span style="font-weight: 600">{{ minutes }}</span>m :
                <span style="font-weight: 600">{{ seconds }}</span>s
            </div>
        </div>
        <p style="margin-top: 1rem; line-height: 18px; font-size: 12px">You will receive template documents and Discord invite over email</p>
    </div>

</template>


<script>

    export default {
        name: 'PriceOffer',
        data () {
            return {
              now: Math.trunc((new Date()).getTime() / 1000),
              event: new Date('2022-12-05T21:02:00'),
              finish: false
            }
          },
          mounted () {
            const _self = this
            window.setInterval(() => {
              this.now = Math.trunc((new Date()).getTime() / 1000)
              if (!this.finish && this.calculatedDate - this.now <= 0) {
                _self.finish = true
                _self.$emit('onFinish')
              }
            }, 1000)
          },
          methods: {
            gtag_report_conversion() {
              window.gtag_report_conversion()
            }

          },
          computed: {
            secondCount () {
              return this.calculatedDate - this.now
            },
            calculatedDate () {
              return Math.trunc(Date.parse(this.event) / 1000)
            },
            seconds () {
              if (this.secondCount < 0) return 0
              return this.secondCount % 60
            },
            minutes () {
              if (this.secondCount < 0) return 0
              return Math.trunc(this.secondCount / 60) % 60
            },
            hours () {
              if (this.secondCount < 0) return 0
              return Math.trunc(this.secondCount / 60 / 60) % 24
            },
            days () {
              if (this.secondCount < 0) return 0
              return Math.trunc(this.secondCount / 60 / 60 / 24)
            }
          },
    }

</script>
