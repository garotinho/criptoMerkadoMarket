<template>
  <div>
    <div class="title1 section-t-space">
      <h4>{{subtitle}}</h4>
      <h2 class="title-inner1">{{title}}</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="product-para">
            <p class="text-center">{{description}}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product,index) in products"
                  :key="index"
                >
                  <div class="product-box">
                    <productBox1
                      @opencartmodel="showCartModal"
                      @showCompareModal="showcomparemodal"
                      @openquickview="showquickview"
                      @showalert="alert"
                      @alertseconds="alert"
                      :product="product"
                      :index="index"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { ProductModel } from '~/static/models/ProductModel';
import productBox1 from '../../../../components/product-box/product-box1.vue'

@Component({
  components: {
    productBox1
  }
})
export default class FashionProductSlider extends Vue {
  @Prop({ type: Array, required: true }) products!: ProductModel[]
  @Prop({ type: Boolean, required: false }) showquickviewmodel!: boolean
  @Prop({ type: Boolean, required: false }) showcomapreModal!: boolean
  @Prop({ type: Object, required: false }) quickviewproduct!: {}
  @Prop({ type: Object, required: false }) comapreproduct!: {}
  @Prop({ type: Number, required: false }) dismissSecs!: 5
  @Prop({ type: Number, required: false }) dismissCountDown!: 0
  showCart: boolean = false 
  cartproduct: ProductModel = {} as ProductModel
  // constructor() {
  //   super()
  //   console.log('products: ', this.products)
  // }

  title = 'top collection'
  subtitle = 'special offer'
  description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'

  swiperOption = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      }
    }
  }

  alert(item: any) {
    this.dismissCountDown = item
  }

  @Emit('openCart')
  showCartModal(item: any, productData: any) {
    console.log('intoHere')
    this.showCart = item
    this.cartproduct = productData
    // this.$emit('openCart', this.showCart, this.cartproduct)
  }
  
  @Emit('openQuickview')
  showquickview(item: any, productData: any) {
    this.showquickviewmodel = item
    this.quickviewproduct = productData
    // this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
  }

  @Emit('openCompare')
  showcomparemodal(item: any, productData: any) {
    this.showcomapreModal = item
    this.comapreproduct = productData
    // this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
  }
  // props: ['products'],
  // components: {
  //   productBox1
  // },
  // data() {
  //   return {
  //     title: 'top collection',
  //     subtitle: 'special offer',
  //     showCart: false,
  //     showquickviewmodel: false,
  //     showcomapreModal: false,
  //     quickviewproduct: {},
  //     comapreproduct: {},
  //     cartproduct: {},
  //     dismissSecs: 5,
  //     dismissCountDown: 0,
  //     description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
  //     swiperOption: {
  //       slidesPerView: 4,
  //       spaceBetween: 20,
  //       freeMode: false,
  //       breakpoints: {
  //         1199: {
  //           slidesPerView: 4,
  //           spaceBetween: 20
  //         },
  //         991: {
  //           slidesPerView: 3,
  //           spaceBetween: 20
  //         },
  //         420: {
  //           slidesPerView: 1,
  //           spaceBetween: 20
  //         },
  //         0: {
  //           slidesPerView: 1,
  //           spaceBetween: 20
  //         },
  //       }
  //     }
  //   }
  // },
  // methods: {
  //   alert(item) {
  //     this.dismissCountDown = item
  //   },
  //   showCartModal(item, productData) {
  //     this.showCart = item
  //     this.cartproduct = productData
  //     this.$emit('openCart', this.showCart, this.cartproduct)
  //   },
  //   showquickview(item, productData) {
  //     this.showquickviewmodel = item
  //     this.quickviewproduct = productData
  //     this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
  //   },
  //   showcomparemodal(item, productData) {
  //     this.showcomapreModal = item
  //     this.comapreproduct = productData
  //     this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
  //   }
  // }
}
</script>
