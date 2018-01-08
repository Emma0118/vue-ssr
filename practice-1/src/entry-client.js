/**
 * this file is only used in SSR, simply create the app and mounts it to the DOM
 * */

import {createApp} from "./app";

const {app,router} = createApp(); //const app = createApp().app


//this assume App.vue template root element has id = 'app'

//note that it is necessary to use router.onReady on both server and client before returning/mounting the app,
//because the router must resolve async route components ahead of time in order to properly invoke in-component hooks.

router.onReady(() => {
    app.$mount('#app')
})

