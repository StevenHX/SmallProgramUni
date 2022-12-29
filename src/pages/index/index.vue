<template>
  <view class="container">
  	<view class="header">
  		<image src="@/static/images/sunsetglow.jpg"  class="message-board-container">
  			<text class="message-title">
				留言板
			</text>
			<view class="message-body">
				<scroll-view :scroll-y="true" class="scroll-view-y">
					<view>
						<view class="message-item" v-for="(item,index) in messagesList" :key="index">
							<text>{{item.content}}</text>
						</view>						
					</view>
				</scroll-view>
			</view>
  		</image>
  	</view>
  	<view class="body-container">
  		<uni-grid :column="3" :show-border="false" :square="true" @change="gridChange">
			<view style="display:flex;flex-wrap: wrap;">
				<uni-grid-item v-for="(item ,index) in gridList" :index="index" :key="index">
					<view class="grid-item-box">
						<image class="image" :src="item.url" mode="aspectFill" />
						<text class="text">{{item.text}}</text>
					</view>
				</uni-grid-item>
			</view>
		</uni-grid>
  	</view>
	
	 <fui-drawer :show="state.showDraw" direction="left" @close="closeDraw()">
	    <scroll-view scroll-y class="fui-scroll__view">
	      <view>
			  <minePage />
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
import { Tips } from '@/utils/util.ts';

import minePage from "../user/index.vue"

export default defineComponent({
  name: 'IndexPage',
  components: {
	  minePage
  },
  setup() {
    const state = reactive({
      showDraw: false
    })
    const messagesList = ref([])
    const gridList = ref([])


    const store = useStore()
	store.commit(AppMutationTypes.SET_TOKEN, "123")
	console.log(store.state.app.token)
	store.dispatch(AppActionTypes.ACTION_LOGIN)
	console.log(store.state.app.token)
	store.dispatch(AppActionTypes.ACTION_RESET_TOKEN)
	console.log(store.state.app.token)

	
	const closeDraw = function () {
		state.showDraw = false
	}
	
	const clickCity = function () {
	  store.commit(AppMutationTypes.SET_TOKEN, "123")
	  console.log(store.state.app.token)
	  state.showDraw = true
	}
	
	const gridChange = function(e) {
		console.log(e.detail.index)
		const index = e.detail.index
		switch(index) {
			case 7:
				clickCity.apply()
			break;
		}
	}
	
    onShow(() => {
      console.log('index onShow')
	  console.log(store.state.app.token)
    })
    onLoad(() => {
		messagesList.value = [
			{
				content: "1. 切换搜索引擎: 点击搜索框左侧图标可快速切换搜索引擎"
			},
			{
				content: "2. 快速翻译: 点击搜索框联想列表第一项可快速翻译文本"
			},
			{
				content: "3. 右键菜单: 在桌面空白处点击右键可快速添加图标、切换壁纸、设置、备份等操作"
			},
			{
				content: "4. 极简模式: 点击标签页时间快速切换到极简模式"
			},
			{
				content: "5. 切换搜索: 输入框模式下Tab键快速切换搜索引擎"
			},
			{
				content: "6. 高级搜索: 空白处右键-本地搜索 即可打开高级搜索(也可以通过快捷键 Ctrl+F)"
			}
	  ];
	    gridList.value = [
		  {
			  url: '../../static/images/calendar.png',
			  text: '纪念日'
		  },
		  {
			  url: '../../static/images/video.png',
			  text: '视频'
		  },
		  {
			  url: '../../static/images/music.png',
			  text: '音乐'
		  },
		  {
			  url: '../../static/images/picture.png',
			  text: '照片'
		  },
		  {
			  url: '../../static/images/file.png',
			  text: '文件'
		  },
		  {
			  url: '../../static/images/book.png',
			  text: '书籍'
		  },
		  {
			  url: '../../static/images/goods.png',
			  text: '我的物品'
		  },
		  {
			  url: '../../static/images/mine.png',
			  text: '个人中心'
		  },
		]
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
      messagesList,
	  gridList,
	  clickCity,
	  gridChange,
	  closeDraw
    }
  },
})
</script>

<style scoped lang="scss">
@import '@/static/css/variable.scss';
@import '@/static/font/font.css';
.container {
  height: 100vh;
  .header {
    width: 100%;
    height: 524rpx;
    display: flex;
    justify-content: center;
	background: #fff;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
	.message-board-container {
		width: 90%;
		height: 80%;
		margin-top: 70rpx;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
		border-radius: 20rpx;
		font-size: 24rpx;
		position: relative;
		.message-title {
			position: absolute;
			top: 26rpx;
			left: 30rpx;
			font-size: 52rpx;
			font-family: 'GEETYPE-KaiTiGBT-Flash';
			color: rgba(166, 53, 53, 1);
		}
		.message-body {
			position: absolute;
			top: 100rpx;
			left: 30rpx;
			padding-bottom: 60rpx;
			.scroll-view-y {
				height: calc(524rpx * 0.8 - 160rpx);
			}
			.message-item {
				font-size: 30rpx;
				color: rgba(29, 29, 29, 1.0);
				font-weight: 400;
				margin-top: 10rpx;
				width: 100%;
			}
		}
	}
  }
  .body-container {
    width: 100%;
	height: calc(100vh - 524rpx);
	padding: 20rpx 10rpx 20rpx 10rpx;
	overflow: scroll;
	.grid-item-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.image {
			width: 160rpx;
			height: 160rpx;
		}
		.text {
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
			font-weight: 600;
			font-family: 'GEETYPE-KaiTiGBT-Flash';
		}
	}
  }
	/* 自定义内容区样式需自行控制 */
    .fui-scroll__view {
		width: 520rpx;
		overflow: hidden;
	}

}
</style>
