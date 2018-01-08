/**
 * The server entry uses a default export function that can be used repeatedly for each render.
 * it is responsible for creating and returning the app instance which is based on the template that would be built on app.js template
 * */

import {createApp} from "./app";


export default context => {
    //since there could potentially be asynchronous route hooks or components,
    //we will be returning a Promise so that the server can wait until
    //everything is ready before rendering.
    return new Promise((resolve, reject) => {
        const { app, router } = createApp()

        //set server-side router's location
        route.push(context.url)

        //wait until router has resolved possible async components and hooks
        router.onReady(() => { //callbak, [errCallback]
            const matchedComponents = router.getMatchedComponents()
                if(!matchedComponents.length) {
                    return reject({ code : 404 })
                }
                // the Promise should resolve the app instance so it can be rendered
            resolve(app)
        }, reject)
    })
}

