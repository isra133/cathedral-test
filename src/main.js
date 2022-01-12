
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import store from './store'

/*Validator Base*/
// import { ValidationProvider } from 'vee-validate';
// import { ValidationObserver } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider);
// Vue.component('ValidationObserver', ValidationObserver);
// import { extend } from 'vee-validate';
// import {required } from 'vee-validate/dist/rules';

// extend('required', {
//   ...required,
//   message: 'Debes responder para continuar'
// });


createApp(App).use(store).use(router).mount('#app')
