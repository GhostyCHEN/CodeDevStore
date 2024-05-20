import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import SmartEditor from 'smart-editor-v2';
import 'smart-editor-v2/lib/smart-editor-v2.css';
Vue.use(SmartEditor);

new Vue({
    render: (h) => h(App)
}).$mount('#app');
