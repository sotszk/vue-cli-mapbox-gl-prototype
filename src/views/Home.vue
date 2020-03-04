<template>
  <div class="home">
    <h1 class="y-account-name">I am {{ accountName }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      hoge: 'hoge',
    };
  },
  computed: {
    accountName() {
      return this.$store.state.account.name;
    },
  },
  beforeMount() {
    this.$store.commit('increment');
    console.log(this.$store.state.count);
    this.$store.commit('account/setName', 'Sota Suzuki');
  },
});
</script>

<style scoped>
.y-account-name {
  @apply text-5xl font-bold;
}
</style>
