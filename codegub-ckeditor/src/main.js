import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
import SmartEditor from 'smart-editor-v2';
import 'smart-editor-v2/lib/smart-editor-v2.css';
Vue.use(SmartEditor);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');

// import Vue from 'vue';
// import { createVuetify } from './plugins/vuetify';
// import App from './App.vue';

// const vuetify = createVuetify(Vue);

// import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap } from 'vuetify-pro-tiptap';
// import 'vuetify-pro-tiptap/style.css';

// const VuetifyProTipTap = createVuetifyProTipTap({
//     vuetify,
//     lang: 'zhHans',
//     components: {
//         VuetifyTiptap,
//         VuetifyViewer
//     },
//     config: {}
// });
// Vue.use(VuetifyProTipTap);

// new Vue({
//     vuetify,
//     render: (h) => h(App)
// }).$mount('#app');
