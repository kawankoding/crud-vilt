import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import {InertiaProgress} from "@inertiajs/progress";

createInertiaApp({
    title: (title) => `${title} - Kawan Koding`,
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({methods: {route}})
            .mount(el)
    },
})

InertiaProgress.init()
