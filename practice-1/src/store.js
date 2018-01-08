/**
 * if the app relies on some asynchronous data, these data need to pre-fetched
 * and resolved before we start the rendering process
 * otherwise client and server will use different state
 * Thus we create a state container, Vuex, fetching an item based on an id
 * */

import Vue from 'vue';
import Vux from 'vuex';

Vue.use(vuex);


