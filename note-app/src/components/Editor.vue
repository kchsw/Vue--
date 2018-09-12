<template>
	<div class="note-editor">
		 <textarea class="form-control"
		  :value = 'activeNoteText'
		  @input="editNote"
		 ></textarea>
	</div>
</template>


<script>
	import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
    export default{
    	name:'Editor',
    	computed:{
    		...mapGetters(['activeNoteText']),
    	},
    	methods:{
			...mapActions(['editNote'])
		}
    }
</script>


<style>
	.note-editor{
		height: 100%;
		margin-left: 380px;
	}
	.note-editor textarea{
		height: 100%;
		font-size: 30px;
		border: 0;
		border-radius: 0;
	}
</style>