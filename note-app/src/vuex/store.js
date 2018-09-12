import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes: [],
	activeNote: {}
}

const mutations = {

	//新建笔记
	add_note(state){
		const newNote = {
			text: 'New note',
            favorite: false
		}
		state.notes.push(newNote);
		// state.activeNote = newNote;
	},

	//编辑笔记

	edit_note(state,text){
		state.activeNote.text = text;
	},

    //删除笔记

    delete_note(state){

    	var index = state.notes.indexOf(state.activeNote);
    	if(index == -1){
    		return
    	}else{
    		state.notes.splice(index, 1);
            state.activeNote = {};
    	}
    },

    //设置喜好

    toggle_favorite(state){
    	state.activeNote.favorite = !state.activeNote.favorite
    	
    },

    set_activeNote(state,note){
    	state.activeNote = note
    }

}

const getters = {
	notes:(state)=>state.notes,
	activeNote:(state)=>state.activeNote,
	activeNoteText: state => state.activeNote.text

}

const actions = {
	addNote({commit}){
		commit('add_note')
	},
	editNote({commit},e){
		commit('edit_note',e.target.value)
	},
	deletNote({commit}){
		commit('delete_note')
	},
	updateActiveNote({commit},note){
		commit('set_activeNote',note)
	},
	toggleFavorite({commit}){
		commit('toggle_favorite')
	}
}
export default new Vuex.Store({
	state,
    mutations,
	getters,
	actions
})