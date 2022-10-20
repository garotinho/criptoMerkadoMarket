<template>
  <div>
    <div class="title1 section-t-space">
      <h4>{{subtitle}}</h4>
      <h2 class="title-inner1">{{title}}</h2>
    </div>
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="theme-tab">
              <b-tabs content-class="mt-3">
                <b-tab
                  :title="collection"
                  v-for="(collection,index) in category"
                  :key="index"
                >
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in getCategoryProduct(collection)"
                      :key="index"
                    >
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
                </b-tab>
              </b-tabs>
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
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'
import { ProductModel } from '~/static/models/ProductModel'
import productBox1 from '../../../../components/product-box/product-box1.vue'

@Component({
  components: {
    productBox1
  },
})
export default class FashionProductTab extends Vue {
  title: string = 'special products'
  subtitle: string = 'exclusive products'

  showCart: boolean = false
  cartproduct: ProductModel = {} as ProductModel
  // @Prop({ type: Boolean, required: false }) showCart!: false
  @Prop({ type: Boolean, required: false }) showquickviewmodel!: false
  @Prop({ type: Boolean, required: false }) showcomapreModal!: false
  @Prop({ type: Object, required: false }) quickviewproduct!: {}
  @Prop({ type: Object, required: false }) comapreproduct!: {}
  // @Prop({ type: Object, required: false }) cartproduct!: {}
  @Prop({ type: Number, required: false }) dismissSecs!: 5
  @Prop({ type: Number, required: false }) dismissCountDown!: 0
  @Prop({ type: Array, required: true }) products!: ProductModel[]
  @Prop({ type: Array, required: true }) category!: any

  getCategoryProduct(category: string) { return this.products.filter((product) => product.collection.find(i => i === category)) }

  // @Emit()
  alert(item: any) {
    this.dismissCountDown = item
  }

  @Emit('openCart')
  showCartModal(item: any, productData: any) {
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

  // props: ['products', 'category'],
  // methods: {
  //   getCategoryProduct(collection) {
  //     return this.products.filter((item) => {
  //       if (item.collection.find(i => i === collection)) {
  //         return item
  //       }
  //     })
  //   },
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
