<template>
  <div>
    <b-modal
      id="modal-cart"
      size="lg"
      centered
      title="Add-to-cart"
      :hide-footer="true"
      :hide-header="true"
      v-if="openCart"
    >
      <div class="row cart-modal">
        <div class="col-lg-12">
          <button class="close" type="button" @click="closeCart(openCart)">
            <span>×</span>
          </button>
          <div class="media">
            <img
              :src="getImgUrl(productData.images[0].src)"
              class="img-fluid"
              :alt="productData.images[0].alt"
            />
            <div class="media-body align-self-center text-center">
              <h5>
                <i class="fa fa-check"></i>Item
                <span>{{productData.title}}</span>
                <span>successfully added to your Cart. 1</span>
              </h5>
              <div class="buttons d-flex justify-content-center">
                <nuxt-link
                  :to="{ path: '/page/account/cart'}"
                  class="btn-sm btn-solid mr-2"
                >View Cart</nuxt-link>
                <nuxt-link
                  :to="{ path: '/page/account/checkout'}"
                  class="btn-sm btn-solid mr-2"
                >Checkout</nuxt-link>
                <nuxt-link
                  :to="{ path: '/'}"
                  class="btn-sm btn-solid"
                >Continue Shopping</nuxt-link>
              </div>
              <div class="upsell_payment">
                <img alt="" class="img-fluid w-auto mt-3" :src='"@/assets/images/payment_cart.png"'></div>
            </div>
          </div>
          <div class="product-section">
                <div class="col-12 product-upsell text-center">
                  <h4>Customers who bought this item also.</h4>
                </div>
                <div class="row">
                  <div
                  v-for="(product,index) in cartRelatedProducts(productData.collection[0], productData.id).slice(0, 4)"
                  :key="index"
                  class="product-box col-sm-3 col-6">
                    <div class="img-wrapper">
                      <div class="front">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img
                            :src='getImgUrl(product.images[0].src)'
                            class="img-fluid"
                            :alt="product.title"
                          />
                        </nuxt-link>
                      </div>
                      <div class="product-detail">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <h6>{{ product.title }}</h6>
                        </nuxt-link>
                        <h4 v-if="product.sale">{{ currency(discountedPrice(product) * curr.curr, curr.symbol) }}
                          <del>{{ currency(product.price * curr.curr, curr.symbol) }}</del>
                        </h4>
                        <h4 v-else>{{ currency(product.price * curr.curr, curr.symbol) }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { mapState, mapGetters } from 'vuex'
import { ProductModel } from '~/static/models/ProductModel';
@Component({
  components: {}
})
export default class CardModalPopup extends Vue {
  @Prop({ type: Boolean, required: true }) openCart!: boolean
  @Prop({ type: Object, required: true }) productData!: ProductModel
  @Prop({ type: Array, required: true }) products!: ProductModel[]
  @Prop({ type: Array, required: true }) category!: any[]
  
  currency(amount: number, symbol: string) { return `${symbol}${amount.toFixed(2)}` }

  get curr() { return this.$store.state.product.currency || {} }
  getImgUrl(path: string) { return require('@/assets/images/' + path) }

  @Emit()
  closeCart(val: boolean) {
    val = false
    this.$emit('closeCart', val)
  }

  @Emit()
  cartRelatedProducts(collection: string, id: string) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        if (item.id !== id) {
          return item
        }
      }
    })
  }

  @Emit()
  discountedPrice(product: ProductModel) { return product.price - (product.price * product.discount / 100) }
  // props: ['openCart', 'productData', 'products', 'category'],
  // computed: {
  //   ...mapState({
  //     currency: state => state.products.currency
  //   }),
  //   ...mapGetters({
  //     curr: 'products/changeCurrency'
  //   })
  // },
  // methods: {
  //   // Get Image Url
  //   getImgUrl(path) {
  //     return require('@/assets/images/' + path)
  //   },
  //   closeCart(val) {
  //     val = false
  //     this.$emit('closeCart', val)
  //   },
  //   cartRelatedProducts(collection, id) {
  //     return this.products.filter((item) => {
  //       if (item.collection.find(i => i === collection)) {
  //         if (item.id !== id) {
  //           return item
  //         }
  //       }
  //     })
  //   },
  //   discountedPrice(product) {
  //     return product.price - (product.price * product.discount / 100)
  //   }
  // }
}
</script>
