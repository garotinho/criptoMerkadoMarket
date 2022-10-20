<template>
  <div>
    <Header8 />
    <Slider />
    <CollectionBanner />
    <ProductSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <Banner />
    <ProductTab :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <!-- <Services /> -->
    <!-- <Blog /> -->
    <!-- <Instagram /> -->
    <!-- <LogoSlider /> -->
    <!-- <Footer1 /> -->
    <!-- <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" /> -->
    <!-- <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" /> -->
    <!-- <CartModalPopup :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products="products" /> -->
    <!-- <NewsletterPopup /> -->
  </div>
</template>
<script lang="ts"> 
import { mapState } from 'vuex'
import { Vue, Component, Emit, VModel, Prop } from 'nuxt-property-decorator'
// import Header from '../../../components/header/Header9.vue'
// import Footer from '../../../components/footer/footer1.vue'
// import quickviewModel from '../../../components/widgets/quickview.vue'
// import compareModel from '../../../components/widgets/compare-popup.vue'
// import cartModel from '../../../components/cart-model/cart-modal-popup.vue'
// import newsletterModel from '../../../components/widgets/newsletter-popup.vue'
import Slider from './components/slider.vue'
import CollectionBanner from './components/collection_banner.vue'
import ProductSlider from './components/product_slider.vue'
import Banner from './components/banner.vue'
import ProductTab from './components/product_tab.vue'
import Services from './components/services.vue'
import Blog from './components/blog.vue'
import Instagram from './components/instagram.vue'
import LogoSlider from './components/logo_slider.vue'
import { ProductModel } from '~/static/models/ProductModel'

Component.registerHooks(['asyncData', 'head']);

@Component({
  components: {
    Slider,
    CollectionBanner,
    ProductSlider,
    Banner,
    ProductTab,
    Services,
    Blog,
    Instagram,
    LogoSlider,
  },
})
export default class FashionIndex extends Vue {
  @Prop({ type: Object, required: false }) showquickviewmodel!: boolean
  @Prop({ type: Object, required: false }) showcomparemodal!: boolean
  // @Prop({ type: Object, required: false }) showcartmodal!: boolean
  @Prop({ type: Object, required: false }) quickviewproduct!: {}
  @Prop({ type: Object, required: false }) comapreproduct!: {}
  // @Prop({ type: Object, required: false }) cartproduct!: {}
  showcartmodal: boolean = false
  cartproduct: ProductModel = {} as ProductModel

  @VModel({ type: Array }) productslist!: any[]

  // @Emit()
  showQuickview(item: any, productData: any) {
    this.showquickviewmodel = item
    this.quickviewproduct = productData
  } 

  // @Emit()
  showCoampre(item: any, productData: any) {
    this.showcomparemodal = item
    this.comapreproduct = productData
  }

  // @Emit()
  closeCompareModal(item: any) {
    this.showcomparemodal = item
  }

  // @Emit()
  showCart(item: any, productData: any) {
    this.showcartmodal = item
    this.cartproduct = productData
  }

  // @Emit()
  closeCartModal(item: any) {
    this.showcartmodal = item
  }
 
  get products() { return this.$store.state.product.products  }
  get category() { return this.$store.state.product.category  }
  // computed: {
  //   ...mapState({
  //     productslist: state => state.products.productslist
  //   })
  // },
  // mounted() {
  //   this.productsArray()
  // },
//   methods: {
//     productsArray: function () {
//       this.productslist.map((item) => {
//         if (item.type === 'fashion') {
//           this.products.push(item)
//           item.collection.map((i) => {
//             const index = this.category.indexOf(i)
//             if (index === -1) this.category.push(i)
//           })
//         }
//       })
//     },
//     showQuickview(item, productData) {
//       this.showquickviewmodel = item
//       this.quickviewproduct = productData
//     },
//     showCoampre(item, productData) {
//       this.showcomparemodal = item
//       this.comapreproduct = productData
//     },
//     closeCompareModal(item) {
//       this.showcomparemodal = item
//     },
//     showCart(item, productData) {
//       this.showcartmodal = item
//       this.cartproduct = productData
//     },
//     closeCartModal(item) {
//       this.showcartmodal = item
//     }
//   }
}
</script>
