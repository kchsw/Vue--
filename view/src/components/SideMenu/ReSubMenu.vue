<template>
	<Submenu :name="parent.name">
		<template slot="title">
			<Icon :type="parent.icon" />
			{{parent.title}}
		</template>
		<template v-for="item in parent.children">
			<resubmenu
				v-if="item.children"
				:key="`menu_${item.name}`"
				:name="item.name"
				:parent="item"
			>
			</resubmenu>
			<menu-item v-else :key="`menu_${item.name}`" :name="item.name">
				<Icon :type="item.icon" />
				{{item.title}}
			</menu-item>
		</template>
	</Submenu>
</template>

<script>
	export default {
		name: 'resubmenu',
		props: {
			parent: {
				type: Object,
				default: () => ({})
			}
		}
	}
	
</script>

<style lang="scss">
	
</style>
