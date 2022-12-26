<template>
  <view class="container">
  	<view class="header" @click="clickCity">
  		zzzz
  	</view>
  	<view class="body">
  		xxxxxxxxxxxxxxx
  	</view>
	
	 <fui-drawer :show="state.showDraw" direction="left">
	    <scroll-view scroll-y class="fui-scroll__view">
	      <view>
			  <text>dsdsdsd</text>
			  <text>dsdsdsd</text>
			  <text>dsdsdsd</text>
			  <text>dsdsdsd</text>
			  <text>dsdsdsd</text>
			  <text>dsdsdsd</text>
			  <text>dsdsdsd</text>
	      </view>
	    </scroll-view>
	  </fui-drawer>
  </view>
</template>

<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent } from 'vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { AppMutationTypes } from '@/store/modules/app/mutation-types'
import { useStore } from '@/store/index.ts'
import { mapActions } from 'vuex'

import { IMAGE_URL, APP_NAME } from '@/config/app'
import { fetchBannerList } from '@/api/banner'

export default defineComponent({
  name: 'IndexPage',
  components: {
  },
  onPageScroll() {
    // console.log('onPageScroll')
  },
  setup() {
    const state = reactive({
      showDraw: false,
    })


    let isShowMessage = ref(true)
    const closeMessage = () => {
      isShowMessage.value = false
    }

    const store = useStore()
	store.commit(AppMutationTypes.SET_TOKEN, "123")
	console.log(store.state.app.token)
	store.dispatch(AppActionTypes.ACTION_LOGIN)
	console.log(store.state.app.token)
	store.dispatch(AppActionTypes.ACTION_RESET_TOKEN)
	console.log(store.state.app.token)

    const indexBanner = ref([])

    const { proxy } = getCurrentInstance() as any
    // console.log('ctx', proxy, proxy.$StatusBar, proxy.$test)
    const scroll = function (e) {
      const scrollY = e.scrollTop
      state.showBg = scrollY > 40 ? true : false
      state.display = scrollY > 40 ? 'none' : 'block'
    }
    console.log('onPageScroll', onPageScroll)
    onPageScroll((e) => {
      scroll(e)
    })
    onReachBottom(() => {
      //   console.log('onReachBottom')
    })
	
	const clickCity = function () {
	  store.commit(AppMutationTypes.SET_TOKEN, "123")
	  console.log(store.state.app.token)
	  state.showDraw = true
	}
	
    onShow(() => {
      console.log('index onShow')
	  console.log(store.state.app.token)
    })
    onLoad(() => {
      state.navTop = proxy.$StatusBar
      // #ifdef MP-WEIXIN
      state.navHeight = proxy.$CustomBar
      // #endif
	  
	  // fetchBannerList(10).then((res: any) =>{
		 //  const bannerList = res.data.map((item) => {
		 //    let link = ''
		 //    if (item.linkForm == 10) {
		 //      const temp = JSON.parse(item.linkAddress)
		 //      link = `/pages/goods/goodsDetail?productId=${temp.id}&shopId=${temp.shopId}`
		 //    }
		  
		 //    return {
		 //      bannerAddress: item.bannerAddress,
		 //      src: item.img,
		 //      type: item.linkForm == 20 ? 'video' : 'image',
		 //      link: link,
		 //    }
		 //  })
		 //  indexBanner.value = bannerList.filter((item: any) => item.bannerAddress == 70 || item.bannerAddress == 20)
	  // });
    })
    return {
      state,
	  store,
      indexBanner,
      isShowMessage,
      closeMessage,
	  clickCity,
    }
  },
})
</script>

<style lang="scss">
@import '@/static/css/variable.scss';
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: $background-color;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 500rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff0000;
    font-size: 32rpx;
	background: #00aaff;
  }
  .body {
    width: 100%;
	flex: 1;
	background: #ffaa7f;
  }
	/* 自定义内容区样式需自行控制 */
    .fui-scroll__view {
		width: 520rpx;
		flex: 1;
		overflow: hidden;
	}

}
</style>
