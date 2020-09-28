<template>
<div class="post-details container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <h3 class="text-primary">{{bug.title}}</h3>
        <h6 class="text-warning">Created By: {{bug.creatorEmail}}</h6>
        <p>{{bug.description}}</p>
        <h1 class="text-info">Bug Closed: {{bug.closed}}</h1>
        <h1 v-if="bug.closedDate">Closed on: {{new Date(bug.closedDate).toLocaleDateString('en-US')}}</h1>
        <div v-if="isCreator && bug.closed == false" class="col-12">
        <i class="fa fa-pencil-alt" aria-hidden="true"></i>
          <form class="form-inline" @submit.prevent="editActiveBug">
          <input
            type="text"
            class="form-control"
            placeholder="New Bug Title..."
            aria-describedby="helpId"
            v-model="bugData.title"
          />
          <input
            type="text"
            class="form-control"
            placeholder="New Bug Text..."
            aria-describedby="helpId"
            v-model="bugData.description"
          />
          <button type="submit" class="btn btn-warning">Edit Bug</button>
        </form>
        </div>
        <div class="col-12 mt-2" v-if="isCreator && bug.closed == false">
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
      this.bugData.closed = this.bug.closed
      this.$store.dispatch("editActiveBug", this.bugData)
    },
    createNote(){
      let payload = {
        //TODO flagged attribute needs to be in the post
        content: this.newNote.content,
        bug: this.$route.params.id,
        creatorEmail: this.profile.email,
        flagged: "pending"
      }
      this.$store.dispatch("createNote",payload)
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