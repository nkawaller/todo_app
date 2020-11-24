<template>
  <the-header title='greeting'></the-header>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      greeting: "Now adding a header"
    }
  }
};
</script>
