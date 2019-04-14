<template>
	<div class="side-menu-wrapper">
		<slot name="top"></slot>
		<Menu width="auto" theme="dark" v-show="!collapsed">
			<template v-for="item in menuList">
				<re-sub-menu
					v-if="item.children"
					:parent="item"
					:key="`menu_${item.name}`"
					:name="item"
				></re-sub-menu>
				<menu-item v-else :key="`menu_${item.name}`" :name="item.name">
					<Icon :type="item.icon" />
					{{item.title}}
				</menu-item>
			</template>
		</Menu>
		<div class="drop-wrapper" v-show="collapsed">
			<template v-for="item in menuList">
			    <re-drop-down 
					v-if="item.children"
					:key="`drop_${item.name}`"
					:parent="item"
					icon-color="#fff"
					:show-title="false"
			    ></re-drop-down>
				<Tooltip v-else transfer :content="item.title" placement="right" :key="`drop_${item.name}`">
					<span class="drop-menu-span">
						<Icon :type="item.icon" :size="24"/>
					</span>
				</Tooltip>
			</template>
		</div>
	</div>
</template>

<script>
	import ReSubMenu from './ReSubMenu'
	import ReDropDown from './ReDropDown'
	export default {
		name: 'sideMenu',
		components: {
			ReSubMenu,
			ReDropDown
		},
		props: {
			collapsed: {
				type: Boolean,
				default: false
			},
			menuList: {
				type: Array,
				default: () => []			
			}
		}
	}
	
</script>

<style lang="scss">
	.side-menu-wrapper{
		width: 100%;
		.ivu-tooltip, .drop-menu-span{
		    display: block;
		    width: 100%;
		    text-align: center;
		    padding: 7px 0;
		}
		.drop-wrapper > .ivu-dropdown{
		    display: block;
		    padding: 5px;
		    margin: 0 auto;
		}
	}
</style>
