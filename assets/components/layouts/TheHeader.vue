<template>
    <header>
        <h1>{{ greeting }}</h1>
    </header>
</template>

<script>
export default {
    data() {
        return {
            greeting: "This is data from the component"
        }
    },
};
</script>

<style scoped>
    header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>