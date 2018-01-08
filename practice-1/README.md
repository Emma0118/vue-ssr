this is the first simple practice of vue-ssr
begin with app.js
* app.js is the universal entry to our app.
* In a client-only app, we would create the root Vue instance right in this file and mount directly to DOM
* In SSR, however, we would use client-entry.js to mount DOM; app.js is simply exports a createApp function which would be used in entry-server.js to create a render template
