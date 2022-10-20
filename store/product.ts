import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators'
import { ProductModel } from '~/static/models/ProductModel'
import dataProducts from '../data/products.json'

@Module({
  name: 'Product',
  stateFactory: true,
  namespaced: true,
})

export default class Product extends VuexModule {
  products: ProductModel[] = [] as ProductModel[]
  searchProduct: ProductModel[] = [] as ProductModel[]
  currency: any = { curr: 1, symbol: '$' }
  category: any = []

  @Action
  async getProduct() {
    console.log('IntoHere')
  }

  @Action
  async getProducts(playload: { type: string }) {
    this.context.commit('setProducts', {type: playload?.type, data: dataProducts?.data})
  }

  @Action
  async getSearchProduct(payload: { text: string }) {
    this.context.commit('setSearchProduct', payload?.text)
  }

  @Action
  getChangeCurrency(payload: { currency: any }) {
    this.context.commit('setChangeCurrency', payload?.currency)
  }

  @Mutation
  setProducts(payload: any) {
    payload?.data.map((item: ProductModel) => {
      if (item.type === 'fashion') {
        this.products.push(item)
        item.collection.map((i) => {
          const index = this.category.indexOf(i)
          if (index === -1) this.category.push(i)
        })
      }
    })
  }

  @Mutation
  setSearchProduct(text: string) {
    text = text.toLowerCase()
    this.searchProduct = []
    if (text.length) {
      dataProducts?.data.filter((product) => {
        if (product.title.toLowerCase().includes(text)) {
          this.searchProduct.push(product as any)
        }
      })
    }
  }

  @Mutation
  setChangeCurrency(currency: any) {
    this.currency = currency
  }
}
