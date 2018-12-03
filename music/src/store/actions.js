import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'
import {saveSearch, clearSearch, deleteSearch, savePlay, saveFavorite, deleteFavorite} from 'common/js/cache'


function findIndex(list, song){
	return list.findIndex((item)=>{
		return item.id === song.id
	})
}

export const selectPlay = function({commit, state}, {list, index}){
	commit(types.SET_SEQUENCE_LIST, list)
	if(state.mode === playMode.random){
		let randomList = shuffle(list)
        commit(types.SET_PLAYLIST, randomList)
        index = findIndex(randomList, list[index])
	}else{
		commit(types.SET_PLAYLIST, list)
	}
	commit(types.SET_CURRENT_INDEX, index)
	commit(types.SET_PLAYING_STATE, true)
	commit(types.SET_FULL_SCREEN, true)
}

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCE_LIST, list)
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const insertSong = function({commit, state}, song){
	let playlist = state.playlist.slice()
	let sequenceList = state.sequenceList.slice()
	let currentIndex = state.currentIndex
	let currentSong = playlist[currentIndex]
	//插入歌曲是否已存在
	let fpIndex = findIndex(playlist, song)
    //从当前播放歌曲的位置后插入
    currentIndex++
    playlist.splice(currentIndex, 0, song)
    if(fpIndex > -1){
    	if(currentIndex > fpIndex){
    		playlist.splice(fpIndex, 1)
    		currentIndex--
    		//插入位置在相同歌曲的后面，删除后插入歌曲索引index往前挪一位
    	}else{
    		playlist.splice(fpIndex + 1, 1)
    		//插入位置在相同歌曲的前面，相同歌曲的索引index往后挪一位
    	}
    }

    let seIndex = findIndex(sequenceList, currentSong) + 1
    sequenceList.splice(seIndex, 0, song)
    let fsIndex = findIndex(sequenceList, song)
    if(fsIndex > -1){
    	if(seIndex > fsIndex){
    		sequenceList.splice(fsIndex, 1)
    	}else{
    		sequenceList.splice(fsIndex + 1, 1)
    	}
    }
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE, true)
}


export const saveSearchHistory = function({commit}, query){
    commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}
export const deleteSearchHistory = function({commit}, query){
    commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}
export const clearSearchHistory = function({commit}){
    commit(types.SET_SEARCH_HISTORY, clearSearch())
}

export const deleteSong = function({commit, state}, song){
    let playlist = state.playlist.slice()
    let sequenceList = state.sequenceList.slice()
    let currentIndex = state.currentIndex
    let pIndex = findIndex(playlist, song)
    playlist.splice(pIndex, 1)
    let sIndex = findIndex(sequenceList, song)
    sequenceList.splice(sIndex, 1)
    if(currentIndex > pIndex || currentIndex === playlist.length) {
        currentIndex--
    }
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_SEQUENCE_LIST, sequenceList)
    commit(types.SET_CURRENT_INDEX, currentIndex)

    if(!playlist.length){
        commit(types.SET_PLAYING_STATE, false)
    }else{
        commit(types.SET_PLAYING_STATE, true)
    }
}

export const deleteSongList = function({commit}){
    commit(types.SET_CURRENT_INDEX, -1)
    commit(types.SET_PLAYLIST, [])
    commit(types.SET_SEQUENCE_LIST, [])
    commit(types.SET_PLAYING_STATE, false)
}