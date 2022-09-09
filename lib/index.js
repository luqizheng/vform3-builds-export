import axios from 'axios'

import VFormDesigner from '@/components/form-designer/index.vue'
import VFormRender from '@/components/form-render/index.vue'


import { registerIcon } from '@/utils/el-icons'
import SvgIcon from '@/components/svg-icon'  //svg组件
import 'virtual:svg-icons-register'
import '@/iconfont/iconfont.css'

import ContainerWidgets from '@/components/form-designer/form-widget/container-widget/index'
import ContainerItems from '@/components/form-render/container-item/index'
//coder changed
import FormItemWrapper1 from "@/components/form-designer/form-widget/field-widget/form-item-wrapper.vue";
import containerMixin1 from "@/components/form-designer/form-widget/container-widget/containerMixin"
import ContainerWrapper1 from "@/components/form-designer/form-widget/container-widget/container-wrapper"
import FieldComponents1 from '@/components/form-designer/form-widget/field-widget/index'

export const FormItemWrapper = FormItemWrapper1
export const containerMixin = containerMixin1
export const ContainerWrapper = ContainerWrapper1
export const FieldComponents = FieldComponents1

import { addDirective } from '@/utils/directive'
import { installI18n } from '@/utils/i18n'
import { loadExtension } from '@/extension/extension-loader'

//coder changing
import { addENUSLabel, addENUSSetting, addZhCNLabel, addZhCNSetting } from "@/utils/i18n";

export const add_en_us_label = addENUSLabel
export const add_en_us_setting = addENUSSetting

export const add_zh_cn_setting = addZhCNSetting
export const add_zh_cn_label = addZhCNLabel;

import emitter1 from "@/utils/emitter";
import i18n1 from "@/utils/i18n";
import fieldMixin1 from "@/components/form-designer/form-widget/field-widget/fieldMixin";
export const emitter = emitter1
export const i18n = i18n1
export const fieldMixin = fieldMixin1

export * from "@/components/form-designer/widget-panel/widgetsConfig";
export * from '@/components/form-designer/setting-panel/propertyRegister'
export * from "@/components/form-designer/setting-panel/propertyRegister";
export * from "@/components/form-designer/setting-panel/property-editor-factory.jsx";

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
  app.component('form-item-wrapper', FormItemWrapper)
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
  //app.component('draggable', Draggable)
  app.component('svg-icon', SvgIcon)
  app.component('form-item-wrapper', FormItemWrapper)
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
