<template>
  <li class="post-component col-12 border list-group-item">
      <h5 class="card-title text-dark">
      <span class="text-warning">User: {{noteProp.creatorEmail}}</span>
      </h5>
      <span>Note Status: <span class="text-danger">{{noteProp.flagged}}</span></span>
      <div class="card-body">
      <p>{{noteProp.content}}</p>
      </div>
    <div v-if="isCreator">
    <div class="offset-lg-3 col-12 col-lg-6 p-3">
      <i class="fa fa-pencil-alt mb-1" aria-hidden="true" @click="noteToggle = !noteToggle"> Click to Edit Note Content</i>
      <div v-if="noteToggle">
        <form class="form-inline row" @submit.prevent="editNote">
          <input
            type="text"
            class="form-control col-12"
            placeholder="Note text..."
            aria-describedby="helpId"
            v-model="noteData.content"
          >
          <select class="form-control col-12" v-model="noteData.flagged">
            <option>pending</option>
            <option>completed</option>
            <option>rejected</option>
          </select>
          <button type="submit" class="btn btn-warning col-12">Edit Note</button>
        </form>
        </div>
    </div>
      <div>
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
        content: this.noteProp.content
      },
      noteToggle: false
    }
  },
  methods:{
    deleteNote(){
      this.$store.dispatch("deleteNote", this.noteProp.id)
    },
    editNote(){
      this.noteData.id = this.noteProp.id
      this.$store.dispatch("editActiveNotes", this.noteData);
      this.noteToggle = false
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