<template>
  <view class="container">
    <view class="header">
		<image :src="userInfo.pic" class="avator">
		</image>
		<text class="name">{{userInfo.nickName}}</text>
		<text class="role">角色：{{userInfo.role}}</text>
    </view>
	<view class="body">
		<view class="body-item">
			<view class="body-item-left">
				<uni-icons type="chatboxes" size="20"></uni-icons>
				<text class="text">我的留言</text>
			</view>
			<uni-icons type="right" size="16"></uni-icons>
		</view>
		<view class="body-item">
			<view class="body-item-left">
				<uni-icons type="bars" size="20"></uni-icons>
				<text class="text">我设置的纪念日</text>
			</view>
			<uni-icons type="right" size="16"></uni-icons>
		</view>
		<view class="body-item">
			<view class="body-item-left">
				<uni-icons type="phone" size="20"></uni-icons>
				<text class="text">修改联系方式</text>
			</view>
			<uni-icons type="right" size="16"></uni-icons>
		</view>
		<view class="body-item">
			<view class="body-item-left">
				<uni-icons type="settings-filled" size="20"></uni-icons>
				<text class="text">修改登录密码</text>
			</view>
			<uni-icons type="right" size="16"></uni-icons>
		</view>
		
		<view class="body-btn">
			<text>退出登录</text>
		</view>
	</view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
let isLogin = ref(true)
let userInfo = reactive({
  pic: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8SiagBMUuLZ7USibVCmnJBvy87ib8gT8gl1wrCwwZRVDsv9a6t4lbGLHcoiacKDxjvgw0v374xE3UkQ/132',
  nickName: '黄晓',
  role: '男主人'
})
const toPage = (path) => {
  console.log('toPage')
}
const goLogin = () => {
  console.log('goLogin')
}
</script>
<style lang="scss" scoped>
@import '@/static/css/variable.scss';
@import '@/static/font/font.css';
.container {
	.header {
		height: 400rpx;
		margin: 90rpx 20rpx 0rpx 20rpx;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
		border-radius: 16rpx;
		background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding-bottom: 10rpx;
		font-size: 28rpx;
		font-family: 'GEETYPE-KaiTiGBT-Flash';
		.avator {
			width: 200rpx;
			height: 200rpx;
		}
		.name {
			margin-top: 20rpx;
			font-size: 34rpx;
			font-weight: 600;
		}
		.role {
			margin-top: 20rpx;
		}
	}
	.body {
		margin: 20rpx 20rpx 50rpx 20rpx;
		padding-top: 40rpx;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
		border-radius: 16rpx;
		height: calc(100vh - 550rpx);
		background: linear-gradient(0deg, rgba(223, 233, 243, 1) 0%, rgba(255, 255, 255, 1) 100%);
		.body-item {
			height: 80rpx;
			margin: 20rpx 20rpx 50rpx 20rpx;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
			border-radius: 16rpx;
			background: white;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.body-item-left {
				display: flex;
				margin-left: 10rpx;
				.text {
					align-self: center;
					font-size: 30rpx;
					font-family: 'GEETYPE-KaiTiGBT-Flash';
					color: rgba(0, 0, 0, 1);
					font-weight: 400;
					margin-left: 10rpx;
				}
			}
		}
		.body-btn {
			height: 80rpx;
			margin: 160rpx 20rpx 50rpx 20rpx;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
			border-radius: 20rpx;
			background: rgba(166, 53, 53, 1);
			display: flex;
			align-items: center;
			justify-content: center;
			text {
				font-size: 28rpx;
				font-family: 'GEETYPE-KaiTiGBT-Flash';
				font-weight: bold;
				color: white;
			}
		}
	}
}
</style>
