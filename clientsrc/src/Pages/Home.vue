<template>
  <h1>Nothing here but us chickens</h1>
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
