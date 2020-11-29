<template>
<div>
    <ul>
        <base-card class="base-card">
        <li>Todo 1</li>
        </base-card>
        <base-card class="base-card">
        <li>Todo 2</li>
        </base-card>
        <base-card class="base-card">
        <li>Todo 3</li>
        </base-card>
    </ul>
    
</div>
</template>

<script>
export default {
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