<template>
<div>
  <the-header title='greeting'></the-header>
  <note-list></note-list>
    </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import NoteList from './components/todo_list/NoteList.vue';

export default {
  components: {
    TheHeader,
    NoteList
  },
  data() {
    return {
      // greeting: "Now adding a header"
    }
  }
};
</script>
