export * from './types'
import { App } from 'vue'

import { Options } from './types'

import labelDemo from './label/index.vue'



export default {

    install: (app: App, option: Options) => {


        app.component('coder-label-demo', labelDemo)

    }
}