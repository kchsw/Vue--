<template>
	<div class="notes-list">
		<div class="list-header">
			<h2>Notes | coligo</h2>
			<div class="btn-group btn-group-justified" role="group" aria-label="...">
				<div class="btn-group" role="group">
				    <button type="button" class="btn btn-default"
				     @click="show = 'all'"
				     :class="{active: show === 'all'}"
				    >All Notes</button>
				</div>
				<div class="btn-group" role="group">
				    <button type="button" class="btn btn-default"
				     @click="show = 'favorites'"
				     :class="{active: show === 'favorites'}"
				    >Favorites</button>
				</div>
			</div>
		</div>

		<div class="list-container">
			<div class="list-group">
			  <a href="#" class="list-group-item "
			   v-for='note of filteredNotes'
			   @click='updateActiveNote(note)'
			   :class="{active: activeNote === note}" 
			  >
			  {{note.text.trim().substring(0, 30)}}
			  </a>
			</div>
		</div>
	</div>
</template>

<script>
    import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	export default{
		name:'NotesList',
		data(){
			return {
				show: 'all'
			}
		},
		computed:{
			...mapGetters(['activeNote','notes']),
			filteredNotes(){
				if(this.show === 'all'){
					return this.notes
				}else if(this.show === 'favorites'){
					return this.notes.filter(note=>note.favorite)
				}
			},
		},
		methods:{
			...mapActions(['updateActiveNote'])
		}
	}
</script>

<style>
	.notes-list{
		width: 300px;
		height: 100%;
		float: left;
		background-color: #F5F5F5;
		font-family: 'Raleway', sans-serif;
		font-weight: 400;
	}
	.list-header{
		padding: 5px 25px 25px 25px;
	}
	.list-header h2 {
		font-weight: 300;
		text-transform: uppercase;
		text-align: center;
		font-size: 22px;
		padding-bottom: 8px;
	}
	.list-container .list-group-item {
	   border: 0;
	   border-radius: 0;
	}
</style>