<template>
  <div class="home">
    <h1 class="y-account-name">I am {{ accountName }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data(): {
    responses: any[];
  } {
    return {
      responses: [],
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

    // this.doPolling('users/SotaSuzuki');
  },
  methods: {
    async doPolling(input: string) {
      const user = await this.$_fetcher.get(input);
      this.responses.push(user);
      await new Promise(resolve => setTimeout(resolve, 3000));
      await this.doPolling(input);
    },
  },
});
</script>

<style scoped>
.y-account-name {
  @apply text-5xl font-bold;
}
</style>
