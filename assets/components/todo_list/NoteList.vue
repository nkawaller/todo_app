<template>
<div>
    <ul>
        <li v-for="note in storedNotes" :key="note.name">
        <base-card class="base-card">
            {{ note.name }}
        </base-card>
        </li>
    </ul>
</div>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseCard },
    data() {
        return {
            storedNotes: [
                {
                    name: 'note 1',
                    editing: 'false',
                    completed: 'false'
                },
                {
                    name: 'note 2',
                    editing: 'false',
                    completed: 'false'
                },
                {
                    name: 'note 2',
                    editing: 'false',
                    completed: 'false'
                }
            ]
        };
    },
    
}
</script>

<style scoped>

</style>