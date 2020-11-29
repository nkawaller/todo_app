import Vue from 'vue';
import App from './App.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import BaseCard from './components/UI/BaseCard.vue';

Vue.component('base-card', BaseCard);

new Vue({
   el: "#app",
   render: h => h(App)
});