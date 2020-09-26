<template>
<div class="post-details container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <h3 class="text-primary">{{bug.title}}</h3>
        <h6 class="text-warning">Created By: {{bug.creatorEmail}}</h6>
        <p>{{bug.description}}</p>
        <div v-if="isCreator" class="col-12">
        <i class="fa fa-pencil-alt" aria-hidden="true"></i>
          <form class="form-inline" @submit.prevent="editActiveBug">
          <input
            type="text"
            class="form-control"
            placeholder="New Bug Title..."
            aria-describedby="helpId"
            v-model="blogData.title"
          />
          <input
            type="text"
            class="form-control"
            placeholder="New Bug Text..."
            aria-describedby="helpId"
            v-model="blogData.body"
          />
          <button type="submit" class="btn btn-warning">Edit Bug</button>
        </form>
        </div>
        <div class="col-12 mt-2" v-if="isCreator">
        <button class="btn btn-danger"  @click="closeBug">Close Bug</button>
        </div>
        <div v-if="profile.email" class="col-12">
        <form class="form-inline" @submit.prevent="createNote">
          <div class="form-group">
            <input
              type="text"
              v-model="newNote.content"
              class="form-control"
              placeholder="Your Note Here..."
              aria-describedby="helpId"
            />
            <!-- Needs another entry for flagged or maybe a default for flagged attribute -->
          </div>
          <button type="submit" class="btn btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
        </div>
        <div class="col-12 text-center">
          <h3 class="text-primary">Notes</h3>
          <ul class="list-group">
            <note-component v-for="note in notes" :key="note.id" :noteProp="note"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import noteComponent from "../components/NoteComponent";
export default {
  name: "bug-details",
  data(){
    return { bugData: {}, newNote: {} };
  },
  mounted(){
    this.$store.dispatch("getActiveBug", this.$route.params.id);
    this.$store.dispatch("getActiveBugNotes", this.$route.params.id);
  },
  methods: {
    closeBug(){
      this.bugData.id = this.bug.id
      this.$store.dispatch("closeBug", this.bugData.id)
    },
    editActiveBug(){
      this.bugData.id = this.bug.id
      this.$store.dipsatch("editActiveBug", this.bugData)
    },
    createNote(){
      let payload = {
        body: this.newNote.body,
        bug: this.$route.params.id,
        creatorEmail: this.profile.email
      }
    }
  },
  computed: {
    bugs(){
      return this.$store.state.bugs
    },
    bug(){
      return this.$store.state.activebug
    },
    notes(){
      return this.$store.state.activenotes
    },
    profile(){
      return this.$store.state.profile
    },
    isCreator(){
      return this.profile.email == this.bug.creatorEmail
    }
  },
  components: {
    noteComponent
  }
}
</script>

<style>

</style>