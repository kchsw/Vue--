<template>
	<div>
		<count-to :endVal="endVal" ref="count">
			<span slot="left">时间:</span>
			<span slot="right">秒</span>
		</count-to>
		<button @click="countReset">重置</button>
		<div class="split-pane-con">
			<split-pane :value.sync="offset">
				<div slot="left">left</div>
        		<div slot="right">right</div>
			</split-pane>
		</div>
		<div class="menu-box">
			<Menu>
				<!-- <menu-item>一级</menu-item>
				<menu-sub>
					<div slot="title">一级</div>
					<menu-item>二级</menu-item>
					<menu-item>二级</menu-item>
					<menu-sub>
						<div slot="title">二级</div>
						<menu-item>三级</menu-item>
						<menu-item>三级</menu-item>
					</menu-sub>
				</menu-sub> -->
				<template v-for="(item, index) in titleList">
					<menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</menu-item>
					<menu-resub v-else :key="`menu_item_${index}`" :parent="item" :index="index"></menu-resub>
				</template>
			</Menu>
		</div>
	</div>
</template>

<script>
	import CountTo from './CountTo'
	import SplitPane from './SplitPane'
	import MenuItem from './menu/menu-item'
	import MenuSub from './menu/menu-sub'
	import MenuResub from './menu/menu-resub'
	import Menu from './menu/menu'
	export default{
		data(){
			return {
				endVal: 1000,
				offset: 0.5,
				titleList: [
					{
						title: '一级菜单'
					},{
						title: '一级菜单'
					},{
						title: '一级菜单',
						children: [
							{
								title: '二级菜单'
							},{
								title: '二级菜单',
								children: [
									{
										title: '三级级菜单'
									},{
										title: '三级级菜单'
									}
								]
							}

						]
					}
				]
			}
		},
		components: {
			CountTo,
			SplitPane,
			MenuItem,
			MenuSub,
			MenuResub,
			Menu
		},
		methods: {
			countReset(){
				this.$refs.count.reset()
			}
		}
	}
</script>

<style>
	.split-pane-con{
		width: 100%;
   		height: 200px;
    	background: papayawhip;
	}
	.menu-box{
		width: 150px;
	}
</style>