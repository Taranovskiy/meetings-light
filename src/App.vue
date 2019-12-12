<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';

export default {
  components: { MainLayout },
  computed: {
    layout() {
      return `${this.$route.meta.layout}-layout`;
    },
  },
};
</script>

<style lang="less">
@import 'assets/styles/index.less';
</style>
