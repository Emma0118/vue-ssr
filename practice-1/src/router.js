/**
 * vue-router
 * */

import Vue from 'vue'
import Router from 'vue-router'
import {Foo, Bar, Baz} from './components/Foo'


export function createRouter() {
    return new Router({
        mode : 'history',
        routes : [
            {
                path : '/Foo', component : () => import(Foo) // 动态加载组件，import() 本身返回 Promise
            },
            {
                path : '/Baz', component : () => import(Baz)
            },
            {
                path : '/Bar', component : () => import(Bar)
            },
        ]
    })
}
