<template>
	<menu-sub>
		<div slot="title">{{parent.title}}</div>
		<template v-for="(item, i) in parent.children">
			<menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{item.title}}</menu-item>
			<menu-resub v-else :key="`menu_item_${index}_${i}`" :parent="item" :index="i"></menu-resub>
		</template>
	</menu-sub>
</template>

<script>
	import MenuItem from './menu-item'
	import MenuSub from './menu-sub'
	export default {
		name: 'menu-resub',
		components: {
			MenuItem,
			MenuSub 
		},
		props: {
			parent: {
				type: Object,
				default: () => ({})
			},
			index: Number
		}

	}
</script>

<style>
	
</style>