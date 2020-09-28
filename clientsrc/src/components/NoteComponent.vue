<template>
  <li class="post-component col-12 border list-group-item">
      <h5 class="card-title mt-2 text-dark"><span class="text-warning">{{noteProp.creatorEmail}}</span> - {{noteProp.content}} - <span class="text-danger">{{noteProp.flagged}}</span></h5>
    <div class="card-body" v-if="isCreator">
      <i class="fa fa-pencil-alt" aria-hidden="true"></i>
        <form class="form-inline" @submit.prevent="editNote">
          <input
            type="text"
            class="form-control"
            placeholder="Comment Text..."
            aria-describedby="helpId"
            v-model="noteData.content"
          />
          <select class="form-control" v-model="noteData.flagged">
            <option>pending</option>
            <option>completed</option>
            <option>rejected</option>
          </select>
          <button type="submit" class="btn btn-warning">Edit Note</button>
        </form>
      <div class="mt-3">
        <button class="btn btn-danger" @click="deleteNote">Delete Note</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name:"note-component",
  props: ["noteProp"],
  data(){
    return {
      noteData: {
      }
    }
  },
  methods:{
    deleteNote(){
      this.$store.dispatch("deleteNote", this.noteProp.id)
    },
    editNote(){
      this.noteData.id = this.noteProp.id
      this.$store.dispatch("editActiveNotes", this.noteData);
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    },
    isCreator(){
      return this.profile.email == this.noteProp.creatorEmail
    }
  }

}
</script>

<style>

</style>