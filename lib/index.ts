export * from './types'
import { App } from 'vue'

import { Options } from './types'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './styles/index.scss'
import './iconfont/iconfont.css'

import Draggable from '../extendLib/vuedraggable/dist/vuedraggable.umd.js'
import { registerIcon } from './utils/el-icons'
import SvgIcon from './components/svg-icon'  //svg组件
import 'virtual:svg-icons-register'
import VFormDesigner from '@/components/form-designer/index.vue'
import VFormRender from '@/components/form-render/index.vue'

import ContainerWidgets from './components/form-designer/form-widget/container-widget/index'
import ContainerItems from './components/form-render/container-item/index'

import { addDirective } from './utils/directive'
import { installI18n } from './utils/i18n'
import { loadExtension } from './extension/extension-loader'
import 'virtual:svg-icons-register'
const components = [
    VFormDesigner,
    VFormRender
  ]
export default {

    install: (app: any, option: Options) => {
        addDirective(app)
        installI18n(app)
        loadExtension(app)
      
        app.use(ContainerWidgets)
        app.use(ContainerItems)
      
        registerIcon(app)
        app.component('draggable', Draggable)
        app.component('svg-icon', SvgIcon)
      
        components.forEach(component => {
          app.component(component.name, component)
        })
      
        window.axios = axios

    }
}