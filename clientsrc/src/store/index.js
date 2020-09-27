import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService"

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activenotes: [],
    activebug: {}
  },
  mutations: {
    // Profile Mutations
    setProfile(state, profile) {
      state.profile = profile;
    },
    // Bug Mutations
    setBugs(state, bugs){
    state.bugs = bugs;
    },
    setActiveBug(state, bug){
      state.activebug = bug
    },
    //Note Mutations
    setActiveBugNotes(state, notes){
      state.activenotes = notes;
    },
    removeNote(state,id){
      state.activenotes = state.activenotes.filter(n => n.id != id)
    }
  },
  actions: {
    // AUTH Actions
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get('profile');
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    // Bug Actions
    async getBugs({commit}){
      try {
        let res = await api.get('bugs');
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addBug({commit, state}, bugData){
      try {
        let res = await api.post('bugs', bugData)
        commit("setBugs",[...state.bugs,res.data])
      } catch (error) {
        console.error(error)
      }
    },
    async getActiveBug({commit},bugId){
      try {
        let res = await api.get('bugs/'+bugId)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async editActiveBug({commit},bug){
      try {
        let res = await api.put('bugs/'+bug.id, bug)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async closeBug({commit},bugId){
      try {
        let res = await api.delete('bugs/'+bugId)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    
    // Note Actions
    async getActiveBugNotes({commit},bugId){
      try {
        let res = await api.get('bugs/'+bugId+'/notes')
        commit("setActiveBugNotes",res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createNote({commit, state},note){
      try{
        let res = await api.post('notes',note)
        commit("setActiveBugNotes",[...state.activenotes,res.data])
      } catch(error){
        console.error(error)
      }
    },
    async editActiveNotes({commit, state}, note){
      try {
        let res = await api.put('notes/'+note.id, note)
        let noteIndex = state.activenotes.findIndex(n => n.id == note.id)
        state.activenotes.splice(noteIndex,1,res.data)
        commit("setActiveBugNotes", state.activenotes)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteNote({commit},noteId){
      try {
        await api.delete('notes/'+noteId)
        commit("removeNote",noteId)
      } catch (error) {
        console.error(error)
      }
    }
    
  }
});
