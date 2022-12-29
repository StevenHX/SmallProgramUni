<template>
  <view class="container">
	  <image class="imagebg" src="https://img.js.design/assets/img/63a9117c8764abe7d898043f.jpg#64c1f793d186878c3dd06de8e66d4c6b" mode="aspectFill"></image>
	  <view class="header">
		<fui-avatar class="image" src="https://img.js.design/assets/img/6295782068f9751eae11eb96.png#dddf4fc9ef8e2622dff2309d9d566039" width="400" height="400"></fui-avatar>
	  </view>
	  <view class="body-container">
		  <view class="input-container">
		  	<input class="input-item" confirm-type="next" type="text" placeholder="请输入用户名" @input="namechanged" @confirm="usernameConfirm"/>
		  	<input class="input-item" type="text" password placeholder="请输入密码" @input="pwdchanged" @confirm="pwdConfirm"/>
		  </view>
		  <button
		    class="submit-enable"
		    type="default"
		    lang="zh_CN"
		    @click="clickLogin()"
		  >
		    立即登录
		  </button>
	  </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Tips } from '@/utils/util.ts';
let isLoginEnable = ref(true)
let userInfo = reactive({
  pic: 'https://img.js.design/assets/img/6295782068f9751eae11eb96.png#dddf4fc9ef8e2622dff2309d9d566039',
  nickName: '黄晓',
  role: '男主人'
})
const clickLogin = () => {
  console.log('click Login')
}
const namechanged = (e)=>{
	console.log(e)
	console.log(e.detail.value)
}
const pwdchanged = (e)=>{
	console.log(e)
	console.log(e.detail.value)
}
const usernameConfirm = (e)=>{
	console.log(e.detail.value)
	
}
const pwdConfirm = (e)=>{
	console.log(e.detail.value)
}
</script>
<style lang="scss" scoped>
@import '@/static/css/variable.scss';
@import '@/static/font/font.css';
.container {
	width: 100%;
	height: 100vh;
	position: relative;
	.imagebg {
		width: 100%;
		height: 100%;
		filter: blur(18px);
	}
	.header {
		position: absolute;
		top: 200rpx;
		left: 0rpx;
		width: 100%;
		height: 600rpx;
		text-align: center;
		.image {
			width: 400rpx;
			height: 400rpx;
		}
	}
	.body-container {
		position: absolute;
		top: 650rpx;
		left: 0rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.input-container {
			width: 100%;
			.input-item {
				height: 90rpx;
				line-height: 90rpx;
				margin: 10rpx 50rpx 50rpx 50rpx;
				padding-left:20rpx;
				border-radius: 24rpx;
				font-size: 28rpx;
				background:  rgba(255, 255, 255, 0.41);
				box-shadow: 5px 8px 5px 2px rgba(0, 0, 0, 0.17);
				
				::v-deep .input-placeholder{
					// padding-left: 20rpx;
				}
			}
		}
		.submit-enable {
			margin-top: 50rpx;
			width: 380rpx;
			height: 90rpx;
			font-size: 32rpx;
			border-radius: 24rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 600;
			background: #6C5955;
			color: #ffffff;
			box-shadow: 5px 8px 5px 2px rgba(0, 0, 0, 0.17);
			border: 2rpx solid #a6a6a6;
		}
	}
}
</style>
