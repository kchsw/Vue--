<template>
	<div class="toolbar">
		<ul>
			<li><i @click='addNote' class="glyphicon glyphicon-plus"></i></li>
			<li><i @click='toggleFavorite'
			       :class='{star: activeNote.favorite}'  class="glyphicon glyphicon-star"></i></li>
			<li><i @click='deletNote' class="glyphicon glyphicon-remove"></i></li>
		</ul>
		
		
		
	</div>
</template>

<script>
    import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default{
		name: 'Toolbar',
		computed:{
			...mapGetters(['activeNote'])
		},
		methods:{
			...mapActions(['addNote','deletNote','toggleFavorite'])
		}
    }
</script>

<style>
	.toolbar{
		width: 80px;
		height: 100%;
		float: left;
		background-color: #30414D;
        color: #767676;
        text-align: center;
	}
	.toolbar ul{
		margin-top: 35px;
	}
	.toolbar i{
		/*display: block;*/
		font-size: 30px;
		margin-bottom: 35px;
		cursor: pointer;
		opacity: 0.8;
		transition: opacity 0.5s ease;
	}
	.toolbar i:hover{
		opacity: 1;
	}
	.star{
		color: #F7AE4F;
	}
</style>
