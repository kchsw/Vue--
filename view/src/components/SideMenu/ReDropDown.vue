<template>
	<Dropdown placement="right-start">
		<span class="drop-menu-span" :style="titleStyle">
			<Icon :type="parent.icon" :color="iconColor" :size="20"/>
			<span v-show="showTitle">{{parent.title}}</span>
		</span>
		<DropdownMenu slot="list">
			<template v-for="item in parent.children">
				<redropdown v-if="item.children" :key="`drop_${item.name}`" :parent="item"></redropdown>
				<DropdownItem v-else :key="`drop_${item.name}`" :name="item.name">
					<Icon :type="item.icon"  :size="20"/>
					{{item.title}}
				</DropdownItem>
			</template>
		</DropdownMenu>
	</Dropdown>
</template>

<script>
	export default {
		name: 'redropdown',
		props: {
			parent: {
				type: Object,
				default: () => ({})
			},
			iconColor: {
				type: String,
				default: '#515a6e'
			},
			showTitle: {
				type: Boolean,
				default: true
			}
		},
		computed: {
		    titleStyle () {
		        return {
		          textAlign: this.showTitle ? 'left' : 'center',
		          paddingLeft: this.showTitle ? '16px' : ''
		        }
		    }
		},
	}
	
</script>

<style lang="scss">
	
</style>
