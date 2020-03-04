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
  async beforeMount() {
    let user;
    try {
      user = await this.$_fetcher.get('users/SotaSuzuki');
    } catch (err) {
      console.error(err);
      return;
    }
    this.$store.commit('account/setName', user.name);
  },
});
</script>

<style scoped>
.y-account-name {
  @apply text-5xl font-bold;
}
</style>
