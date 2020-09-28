<template>
  <div class="container-fluid d-flex flex-column justify-content-center">
    <div class="row">
      <h1 class="card offset-1 col-10 text-dark border-success mt-2 p-1">Reported Bugs</h1>
    </div>
    <div class="row">
      <div v-if="profile.email" class="card offset-1 col-10 my-2 p-1 border-success">
      <form class="form-inline" @submit.prevent="addBug">
        <input class="form-control mx-2" type="text" placeholder="New Bug Title" v-model="newBug.title" required />
        <input class="form-control mx-2" type="text" placeholder="New Bug Description" v-model="newBug.description" />
        <button class="btn btn-success" type="submit">Create Bug Report</button>
      </form>
      </div>
    </div>
    <div class="row card-body">
      <table class="table table-striped offset-1 col-10">
        <tr>
          <th scope="col">Bug Report Title</th>
          <th scope="col">Creator</th>
          <th scope="col" class="text-center">Status</th>
          <th scope="col" class="text-center">Last Modified Date</th>
        </tr>
        <tbody>
        <tr v-for="bug in bugs" :key="bug.id">
          <td><h4><router-link class="text-primary" :to="{name: 'bug-details', params: {id: bug.id}}">{{bug.title}}</router-link></h4></td>
          <td><h5>{{bug.creatorEmail}}</h5></td>
          <td class="text-center"><h5><span class="text-warning" v-if="bug.closed">Closed</span><span class="text-danger" v-else>Open</span></h5></td>
          <td class="text-center"><h5>{{new Date(bug.updatedAt).toLocaleDateString('en-US')}}</h5></td>
        </tr>
        </tbody>
      </table>
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
    profile(){
      return this.$store.state.profile;
    },
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
table, th, td{
  border: 1px solid var(--success)
}

</style>
