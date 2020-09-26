<template>
  <div class="container-fluid d-flex flex-column justify-content-center">
    <div class="row">
      <h1 class="card offset-1 col-10 text-dark border-success">Reported Bugs</h1>
    </div>
    <div class="row">
      <div class="card offset-1 col-10 my-2 p-1 border-success">
      <form class="form-inline" @submit.prevent="addBug">
        <input class="form-control mx-2" type="text" placeholder="New Bug Title" v-model="newBug.title" required />
        <input class="form-control mx-2" type="text" placeholder="New Bug Description" v-model="newBug.description" />
        <button class="btn btn-success" type="submit">Create Bug Report</button>
      </form>
      </div>
    </div>
    <div class="row card-body">
    <div class="card offset-1 col-10 mt-2 border-success see-through" v-for="bug in bugs" :key="bug.id">
      <h1 class="mt-2"><router-link class="text-dark" :to="{name: 'bug-details', params: {id: bug.id}}">{{bug.title}}</router-link><span class="ml-3">{{bug.creatorEmail}}</span><span class="ml-3 text-warning" v-if="bug.closed">Closed</span><span class="ml-3 text-danger" v-else>Open</span><span class="ml-3">{{new Date(bug.updatedAt).toLocaleDateString('en-US')}}</span></h1>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted(){
    this.$store.dispatch("getBugs");
  },
  data() {
    return {
      newBug: {
        description: "",
        title: ""
      },
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
  },
  methods: {
    addBug(){
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = { title: "", description: ""};
    },
  }
};
</script>

<style>

</style>
