import Vuetify from 'vuetify/lib';

export const createVuetify = (Vue) => {
    Vue.use(Vuetify);

    const vuetify = new Vuetify();

    return vuetify;
};
