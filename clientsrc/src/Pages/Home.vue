<template>
  <div class="container-fluid d-flex flex-column justify-content-center">
    <div class="row">
      <h1 class="card offset-1 col-10 text-dark border-success my-2 py-3">Reported Bugs &#128030</h1>
    </div>
    <div class="row mb-2">
      <div v-if="profile.email" class="card offset-1 col-10 mt-2 py-2 border-success">
      <form @submit.prevent="addBug">
        <div class="form-group">
        <input class="form-control" type="text" placeholder="New Bug Title" v-model="newBug.title" required />
        </div>
        <div class="form-group">
        <textarea class="form-control" placeholder="New Bug Description" v-model="newBug.description" rows="3"></textarea>
        </div>
        <div class="form-group">
        <button class="btn btn-success rounded" type="submit">Create Bug Report</button>
        </div>
      </form>
      </div>
    </div>
    <div class="row mt-2">
      <table class="table table-striped offset-lg-1 col-12 col-lg-10">
        <tr>
          <th scope="col">Bug Report Title</th>
          <th scope="col">Creator</th>
          <th scope="col" class="text-center">Status <i :class="{'fas': fillEye, 'far': !fillEye}" class='fa-eye-slash' @click="hideClosed"></i></th>
          <th scope="col" class="text-center">Last Modified Date <i class="fas fa-sort" @click="dateSort"></i></th>
        </tr>
        <tbody>
        <tr v-for="bug in bugs" :key="bug.id"  v-show="bug.closed !== closed">
          <td><h4><router-link class="text-primary" :to="{name: 'bug-details', params: {id: bug.id}, query: {title: bug.title, description: bug.description}}">{{bug.title}}</router-link></h4></td>
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
  mounted() {
    this.$store.dispatch("getBugs");
  },
  data() {
    return {
      newBug: {
        description: "",
        title: "",
      },
      closed: "",
      fillEye: true,
      sort: false,
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    bugs() {
      return this.$store.state.bugs;
    },
  },
  methods: {
    addBug() {
      this.$store.dispatch("addBug", this.newBug);
      this.newBug = { title: "", description: "" };
    },
    hideClosed() {
      if (this.closed === "") {
        this.closed = true;
        this.fillEye = false;
      } else {
        this.closed = "";
        this.fillEye = true;
      }
    },
    dateSort() {
      if (this.sort === false) {
        this.bugs.sort((a, b) => {
          let da = new Date(a.updatedAt),
            db = new Date(b.updatedAt);
          this.sort = true;
          return da - db;
        });
      } else {
        this.bugs.sort((a, b) => {
          let da = new Date(a.updatedAt),
            db = new Date(b.updatedAt);
          this.sort = false;
          return db - da;
        });
      }
    },
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid var(--success);
}

.fas,
.far {
  cursor: pointer;
}
</style>
