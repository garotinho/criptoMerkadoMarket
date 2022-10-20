<template>
  <div>
    <!-- Sample menu definition -->
    <div class="main-navbar">
      <div id="mainnav">
        <div class="toggle-nav" :class="leftSidebarVal ? 'toggle-button' : ''" @click="openmobilenav=true">
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }" >
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav=false">Back</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
            </div>
          </li>
          <li v-for="(menuItem, index) in menulist" :key="index" :class="menuItem.megamenu ? 'mega-menu' : 'dropdown'">
            <a href="#" class="nav-link" @click="setActive(menuItem.title)">
              {{menuItem.title}}
              <span class="sub-arrow" v-if="menuItem.children || menuItem.megamenu"></span>
            </a>
            <ul class="nav-submenu" :class="{ opensubmenu: isActive(menuItem.title) }" v-if="menuItem.children">
              <li v-for="(childrenItem, index) in menuItem.children" :key="index">
                <a href="javascript:void(0)" @click="setActiveChild(childrenItem.title)" v-if="childrenItem.children">
                  {{childrenItem.title}}
                  <span class="sub-arrow" v-if="childrenItem.children"></span>
                </a>
                <nuxt-link v-else :to="{ path: childrenItem.path}"  @click="setActiveChild(childrenItem.title)">
                  {{childrenItem.title}}
                </nuxt-link>
                <ul class="nav-sub-childmenu" :class="{ opensubchild: isActiveChild(childrenItem.title) }" v-if="childrenItem.children">
                  <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                    <nuxt-link :to="{ path: childrenSubItem.path}">
                      {{childrenSubItem.title}}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="mega-menu-container" :class="{ opensubmenu: isActive('portfolio') }" v-if="menuItem.megamenu">
              <div class="container">
                <div class="row">
                  <div class="col mega-box"  v-for="(childrenItem, index) in menuItem.children" :key="index">
                    <div class="link-section">
                      <div class="menu-title" @click="setActivesubmega('portfolio')">
                        <h5>{{childrenItem.title}}
                          <span class="sub-arrow"></span>
                        </h5>
                      </div>
                      <div class="menu-content" :class="{ opensubmegamenu: isActivesubmega('portfolio') }">
                        <ul>
                          <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                            <nuxt-link :to="{ path: childrenSubItem.path}">
                              {{childrenSubItem.title}}
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit, VModel, Prop } from 'nuxt-property-decorator'
import { mapState } from 'vuex'

@Component
export default class WidgetNavbar extends Vue {
  @Prop({ type: String, required: false }) leftSidebarVal!: ''
  @Prop({ type: Boolean, required: false }) openmobilenav!: boolean
  @Prop({ type: Boolean, required: false }) subnav!: false
  @Prop({ type: String, required: false }) activeItem!: 'home'
  @Prop({ type: String, required: false }) activeChildItem!: 'fashion 1'
  @Prop({ type: String, required: false }) activemegaChild!: 'portfolio'

  @Emit()
  mobilenav() {
    this.openmobilenav = !this.openmobilenav
  }

  @Emit()
  isActive(menuItem: string) {
    return this.activeItem === menuItem
  }

  @Emit()
  setActive(menuItem: string) {
    if (this.activeItem === menuItem) {
      this.activeItem = '' as any
    } else {
      this.activeItem = menuItem as any
    }
  }

  @Emit()
  isActiveChild(menuChildItem: string) {
    return this.activeChildItem === menuChildItem
  }

  @Emit()
  setActiveChild(menuChildItem: string) {
    console.log(menuChildItem)
    if (this.activeChildItem === menuChildItem) {
      this.activeChildItem = '' as any
    } else {
      this.activeChildItem = menuChildItem as any
    }
  }

  @Emit()
  isActivesubmega(megaChildItem: string) {
    return this.activemegaChild === megaChildItem
  }

  @Emit()
  setActivesubmega(megaChildItem: string) {
    if (this.activemegaChild === megaChildItem) {
      this.activemegaChild = '' as any
    } else {
      this.activemegaChild = megaChildItem as any
    }
  }

  get menulist() { return this.$store.state.menu.menuList }
  //   props: ['leftSidebarVal'],
  // methods: {
  //   mobilenav: function () {
  //     this.openmobilenav = !this.openmobilenav
  //   },
  //   isActive: function (menuItem) {
  //     return this.activeItem === menuItem
  //   },
  //   setActive: function (menuItem) {
  //     if (this.activeItem === menuItem) {
  //       this.activeItem = ''
  //     } else {
  //       this.activeItem = menuItem
  //     }
  //   },
  //   isActiveChild: function (menuChildItem) {
  //     return this.activeChildItem === menuChildItem
  //   },
  //   setActiveChild: function (menuChildItem) {
  //     console.log(menuChildItem)
  //     if (this.activeChildItem === menuChildItem) {
  //       this.activeChildItem = ''
  //     } else {
  //       this.activeChildItem = menuChildItem
  //     }
  //   },
  //   isActivesubmega: function (megaChildItem) {
  //     return this.activemegaChild === megaChildItem
  //   },
  //   setActivesubmega: function (megaChildItem) {
  //     if (this.activemegaChild === megaChildItem) {
  //       this.activemegaChild = ''
  //     } else {
  //       this.activemegaChild = megaChildItem
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.toggle-nav {
  &.toggle-button {
    z-index: 1;
  }
}
</style>