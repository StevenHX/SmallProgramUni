<template>
	<view class="container">
		<nav-bar home bgColor="bg-white" fontColor="#000" title="我的物品"></nav-bar>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Tips } from '@/utils/util.ts';

const goLogin = () => {
  console.log('goLogin')
  Tips({endtime:100},{tab:2,url:'/pages/login/login'})
}
</script>
<style lang="scss" scoped>
@import '@/static/css/variable.scss';
@import '@/static/font/font.css';
</style>