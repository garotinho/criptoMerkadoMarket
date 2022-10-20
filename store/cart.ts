import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators'
import { ProductModel } from '~/static/models/ProductModel'
import dataProducts from '../data/products.json'

@Module({
  name: 'Cart',
  stateFactory: true,
  namespaced: true,
})

export default class Cart extends VuexModule {
  cart: any[] = [] as []

  @Action
  async doAddToCart(playload: { cartItem: ProductModel }) { this.context.commit('setAddToCart', playload?.cartItem) }
  
  @Action
  async doRemoveCartItem(playload: { cartItem: any }) { this.context.commit('setRemoveCartItem', playload?.cartItem) }

  @Action
  async getProducts() {
    this.context.commit('setProducts', dataProducts?.data)
  }

  @Mutation
  setAddToCart(cartItem: any) {
    const product = dataProducts?.data.find((item: any) => item.id === cartItem.id) as any
    const cartItems = this.cart.find(item => item.id === cartItem.id)
    const qty = cartItem.quantity ? cartItem.quantity : 1
    if (cartItems) {
      cartItems.quantity = qty
    } else {
      this.cart.push({
        ...product,
        quantity: qty
      })
    }
    product.stock--
  }

  @Mutation
  setRemoveCartItem(cartItem: any) { this.cart = this.cart.filter((item) => item.id !== cartItem.id) }

  // @Mutation
  // setProducts(products: ProductModel[]) {
  //   this.products = products
  // }
}
