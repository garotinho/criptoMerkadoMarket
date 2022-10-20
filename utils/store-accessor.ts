import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import product from '~/store/product'
import cart from '~/store/cart'
import menu from '~/store/menu'

let productStore: product
let cartStore: cart
let menuStore: menu

function initialiseStores(store: Store<any>): void {
  productStore = getModule(product, store)
  cartStore = getModule(cart, store)
  menuStore = getModule(menu, store)
}

export {
  initialiseStores,
  productStore,
  cartStore,
  menuStore
}
