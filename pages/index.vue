<template>
  <div>
    <Fashion />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
const Fashion = () => import('./shop/fashion/index.vue')

Component.registerHooks(['asyncData', 'head']);

@Component({
  components: {
    Fashion
  },
  async asyncData({ store, route }: { store: any; route: any }) {
    await store.dispatch('product/getProducts', {type: 'fashion'})
  }
})
export default class Index extends Vue {}
</script>
