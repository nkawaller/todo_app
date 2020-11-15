import Vue from 'vue';
import Parent from './Parent.vue';

new Vue({
   el: "#hello",
   render: h => h(Parent)
});