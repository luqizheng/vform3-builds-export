import axios from 'axios'

import VFormDesigner from '@/components/form-designer/index.vue'
import VFormRender from '@/components/form-render/index.vue'

import Draggable from '@/../extendLib/vuedraggable/dist/vuedraggable.umd.js'
import { registerIcon } from '@/utils/el-icons'
import SvgIcon from '@/components/svg-icon'  //svg组件
import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'

import ContainerWidgets from '@/components/form-designer/form-widget/container-widget/index'
import ContainerItems from '@/components/form-render/container-item/index'

import { addDirective } from '@/utils/directive'
import { installI18n } from '@/utils/i18n'
import { loadExtension } from '@/extension/extension-loader'

//coder changing
/*
export * from "@/components/form-designer/widget-panel/widgetsConfig";
export * from '@/components/form-designer/setting-panel/propertyRegister'
export * from "@/components/form-designer/setting-panel/propertyRegister";
export * from "@/components/form-designer/setting-panel/property-editor-factory.jsx";
*/
/*
import {
  addContainerWidgetSchema,
  addBasicFieldSchema,
  addAdvancedFieldSchema,
  addCustomWidgetSchema
} from '@/components/form-designer/widget-panel/widgetsConfig'
import {
  registerCommonProperty,
  registerAdvancedProperty,
  registerEventProperty
} from '@/components/form-designer/setting-panel/propertyRegister'*/



VFormDesigner.install = function (app) {
  addDirective(app)
  installI18n(app)
  loadExtension(app)

  app.use(ContainerWidgets)
  app.use(ContainerItems)

  registerIcon(app)
  app.component('draggable', Draggable)
  app.component('svg-icon', SvgIcon)
  app.component(VFormDesigner.name, VFormDesigner)
}

VFormRender.install = function (app) {
  installI18n(app)
  loadExtension(app)

  app.use(ContainerItems)

  registerIcon(app)
  app.component('svg-icon', SvgIcon)
  app.component(VFormRender.name, VFormRender)
}

const components = [
  VFormDesigner,
  VFormRender
]

const install = (app) => {
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

  //window.axios = axios
}



export default {

  install: (app, option) => {

    install(app)
  },
  VFormDesigner,
  VFormRender
}
