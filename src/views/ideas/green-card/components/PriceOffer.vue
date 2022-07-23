<template>

    <div class="pricing-table col-xl-6 col-md-8 col-11 offset-xl-3 offset-md-2" style="margin-top: 6rem; padding-top: 1.5rem">
        <div class="price" style="margin-bottom: 0;">
            <span v-if="secondCount > 0" style="color: #0b5345;"><sup>$</sup>89</span>
            <span v-if="secondCount <= 0" style="color: #0b5345;"><sup>$</sup>149</span>
        </div>
        <div v-show="secondCount > 0" class="price" style="margin-bottom: 0.5rem;">
            <sup style="color: #b30000; font-size: 15px;">$</sup><span style="color: #b30000; font-size: 20px; text-decoration: line-through">149</span>
        </div>

        <div class="row banner-action-btns" style="text-align: center; margin-top: 1rem">
            <div class="col-xl-7 col-lg-9">
                <a href="https://checkout.stripe.com/pay/cs_live_a1qNyGjaPCfAQFuj7MBooXupRt0n3gtqfiNtsv7K0zAGkoNEee0B1svkIn#fidkdWxOYHwnPyd1blppbHNgWjA0T290ckNBSGlgSWtqdWJTazBTbnJRPU1kdmBgRlBXVEsyYXQxdURCZlJ3XGlAZnFDdm00cmJgSzJXN21SZjxnT3ZUfGZqaHxmPHVCVXRNVFF1cDc1TmdLNTVgQ0I2QjVATCcpJ3VpbGtuQH11anZgYUxhJz8nMnZMMGtQNXV1NnJ1ZnNgY1xfJ3gl" @click="$gtag.event('register')" class="btn btn-primary">PURCHASE TEMPLATES</a>
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
        <p style="margin-top: 1rem; line-height: 18px; font-size: 12px">You will receive an email with documents. Please check your spam folder. <br>Templates are provided in electronic form only (pdf and doc files).</p>
    </div>

</template>


<script>

    export default {
        name: 'PriceOffer',
        data () {
            return {
              now: Math.trunc((new Date()).getTime() / 1000),
              event: new Date('2022-07-31T00:00:00'),
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
