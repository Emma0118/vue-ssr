/**
 * app.js is the universal entry to our app.
 * In a client-only app, we would create the root Vue instance right in this file and mount directly to DOM
 * In SSR, however, we would use client-entry.js to mount DOM; app.js is simply exports a createApp function which would be used in entry-server.js to create a render template
 * @version 1.1
 * @author Emma 2018-01-06
 * */

import Vue from 'vue'
import App from './App.vue'
import { createRouter } from "./router";

export function createApp() {
    //create router instance
    const router = createRouter()

    const app = new Vue({
        render : h => h(app)
    })
    return {app, router}
}

