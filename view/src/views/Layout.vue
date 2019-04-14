<template>
	<div class="layout-wrapper">
		<Layout class="layout-outer">
			<Sider  collapsible hide-trigger	breakpoint="sm" v-model="collapsed">
				<side-menu :collapsed="collapsed" :menuList="menuList">
					<div class="logo" slot="top">
						<Icon type="logo-chrome" :size="28"/>
					</div>
				</side-menu>
			</Sider>
			<Layout>
				<Header class="header-wrapper">
					<Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32"/>
				</Header>
				<Content class="content-on">
					<Card class="page-card">
						<router-view/>
					</Card>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>
<script>
	import SideMenu from "../components/SideMenu/SideMenu"
	export default {
		data() {
			return {
				collapsed: false,
				menuList: [
					{
						title: '一级菜单',
						icon: 'logo-buffer',
						name: 'menu-1'
					},{
						title: '一级菜单',
						icon: 'logo-buffer',
						name: 'menu-2'
					},{
						title: '一级菜单',
						icon: 'logo-buffer',
						name: 'menu-3',
						children: [
							{
								title: '二级菜单',
								icon: 'logo-buffer',
								name: 'menu-3-1'
							},{
								title: '二级菜单',
								icon: 'logo-buffer',
								name: 'menu-3-2',
								children: [
									{
										title: '三级级菜单',
										icon: 'logo-buffer',
										name: 'menu-3-2-1'
									},{
										title: '三级级菜单',
										icon: 'logo-buffer',
										name: 'menu-3-2-2'
									}
								]
							}

						]
					}
				]
			}
		},
		components: {
			SideMenu
		},
		computed:{
			triggerClasses(){
				return [
					'triggerClasses',
					this.collapsed ? 'rotate' : '' 
				]
			},
			getRoutes(){
			// 	return this.$router.options.routes
				return this.$route.name
			}
		},
		methods: {
			handleCollapsed(){
				this.collapsed = !this.collapsed
			}
		}
		
	}
</script>

<style lang="scss">
.layout-wrapper{
	height: 100%;
	.layout-outer{
		height: 100%;
		.logo{
			height: 40px;
			line-height: 40px;
			// font-size: 20px;
			text-align: center;
			color: #fff;
			margin-top: 20px;
		}
		.header-wrapper{
			background: #fff;
			box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
			padding: 0 10px;
			.triggerClasses{
				cursor: pointer;
				&.rotate{
					transform: rotateZ(-90deg);
					transition: all .3s ease;
				}
			}
		}
		.content-on{
			padding: 10px;
			.page-card{
				min-height: calc(100vh - 84px);
			}
		}
	}
}
	
</style>