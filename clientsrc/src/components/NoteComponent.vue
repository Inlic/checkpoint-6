<template>
  <li class="post-component col-12 border list-group-item my-2">
    <div class="row text-center">
      <div class="col-12">
        <span class="float-right">
          <i class="fa fa-times" aria-hidden="true" @click="deleteNote"></i>
        </span>
        <h5 class="text-warning">
          <span class="text-dark">User: </span> {{ noteProp.creatorEmail }}
          <br />
          <span class="text-dark">Note Status: </span>
          <span class="text-danger">{{ noteProp.flagged }}</span>
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="offset-1 col-10 card">
        <p class="pt-2">{{ noteProp.content }}</p>
      </div>
    </div>
    <div v-if="isCreator" class="row">
      <div class="offset-lg-3 col-12 col-lg-6 p-3">
        <i
          class="fa fa-pencil-alt mb-1"
          aria-hidden="true"
          @click="noteToggle = !noteToggle"
        >
          Click to Edit Note Content</i
        >
        <div v-if="noteToggle">
          <form class="form-inline row" @submit.prevent="editNote">
            <input
              type="text"
              class="form-control col-12 mt-2 rounded-top"
              placeholder="Note text..."
              aria-describedby="helpId"
              v-model="noteData.content"
            />
            <select
              class="form-control col-12 rounded-bottom"
              v-model="noteData.flagged"
            >
              <option>pending</option>
              <option>completed</option>
              <option>rejected</option>
            </select>
            <button type="submit" class="btn btn-warning col-12 rounded">
              Edit Note
            </button>
          </form>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "note-component",
  props: ["noteProp"],
  data() {
    return {
      noteData: {
        content: this.noteProp.content,
      },
      noteToggle: false,
    };
  },
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.noteProp.id);
    },
    editNote() {
      this.noteData.id = this.noteProp.id;
      this.$store.dispatch("editActiveNotes", this.noteData);
      this.noteToggle = false;
    },
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    isCreator() {
      return this.profile.email == this.noteProp.creatorEmail;
    },
  },
};
</script>

<style>
.fa.fa-times {
  cursor: pointer;
  color: var(--danger);
}
</style>