import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators'
import dataMenu from '../data/menu.json'


@Module({
  name: 'Menu',
  stateFactory: true,
  namespaced: true,
})

export default class Menu extends VuexModule {
  menuList: any[] = dataMenu?.data as []
}