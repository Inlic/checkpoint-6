<template>
  <div class="post-details container-fluid">
    <div class="row text-center border-bottom border-success">
      <div class="col-12 card">
        <h1 class="text-primary">{{ bug.title }}</h1>
        <h2>
          Bug Status:
          <span
            :class="{
              'text-warning': bug.closed,
              'text-danger': !bug.closed,
            }"
            >{{ bug.closed ? "Closed" : "Open" }}</span
          >
        </h2>
        <h2 v-if="bug.closedDate">
          Closed on:
          {{ new Date(bug.closedDate).toLocaleDateString("en-US") }}
        </h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12">
        <h6 class="py-2 my-2">
          Created By: <span class="text-warning"> {{ bug.creatorEmail }}</span>
        </h6>
      </div>
      <div class="col-12 offset-md-1 col-md-10 card">
        <p class="pt-2">{{ bug.description }}</p>
      </div>
    </div>
    <div class="row text-center">
      <div
        v-if="isCreator && bug.closed == false"
        class="offset-lg-3 col-12 col-lg-6 p-2"
      >
        <i
          class="fa fa-pencil-alt mb-1"
          aria-hidden="true"
          @click="editToggle = !editToggle"
        >
          Click to Edit Bug Content</i
        >
        <div v-if="editToggle">
          <form class="form-inline row" @submit.prevent="editActiveBug">
            <input
              type="text"
              class="form-control col-12 mt-2 rounded-top"
              placeholder="New Bug Title..."
              aria-describedby="helpId"
              v-model="bugData.title"
            />
            <textarea
              class="form-control col-12 mb-2 rounded-bottom"
              placeholder="New Bug Text..."
              aria-describedby="helpId"
              v-model="bugData.description"
              rows="3"
            ></textarea>
            <button type="submit" class="btn btn-warning col-12 rounded">
              Edit Bug
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="row divider-tiny"></div>
    <div class="row text-center">
      <div class="col-12 mb-2" v-if="isCreator && bug.closed == false">
        <button class="btn btn-danger rounded" @click="closeBug">
          Close Bug
        </button>
      </div>
    </div>
    <div class="row divider-tiny"></div>
    <div class="row text-center border-bottom border-success">
      <div v-if="profile.email" class="col-12 card">
        <form @submit.prevent="createNote">
          <div class="input-group m-2">
            <input
              type="text"
              v-model="newNote.content"
              class="form-control rounded"
              placeholder="Your Note Here..."
              aria-describedby="helpId"
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-success rounded">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row border-bottom border-success">
      <div class="col-12 text-center my-2">
        <h1 class="text-primary">Notes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-2">
        <ul class="list-group row">
          <note-component
            v-for="note in notes"
            :key="note.id"
            :noteProp="note"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import noteComponent from "../components/NoteComponent";
export default {
  name: "bug-details",
  data() {
    return {
      bugData: {
        title: this.$store.state.activebug.title,
        description: this.$store.state.activebug.description,
      },
      newNote: {},
      editToggle: false,
    };
  },
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
    this.$store.dispatch("getActiveBugNotes", this.$route.params.id);
  },
  methods: {
    closeBug() {
      this.bugData.id = this.bug.id;
      this.$store.dispatch("closeBug", this.bugData.id);
    },
    editActiveBug() {
      this.bugData.id = this.bug.id;
      this.bugData.closed = this.bug.closed;
      this.$store.dispatch("editActiveBug", this.bugData);
    },
    createNote() {
      let payload = {
        //TODO flagged attribute needs to be in the post
        content: this.newNote.content,
        bug: this.$route.params.id,
        creatorEmail: this.profile.email,
        flagged: "pending",
      };
      this.$store.dispatch("createNote", payload);
      this.newNote.content = ""; //clears field after note is created
    },
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    bug() {
      return this.$store.state.activebug;
    },
    notes() {
      return this.$store.state.activenotes;
    },
    profile() {
      return this.$store.state.profile;
    },
    isCreator() {
      return this.profile.email == this.bug.creatorEmail;
    },
  },
  components: {
    noteComponent,
  },
};
</script>

<style>
i {
  cursor: pointer;
}
</style>