// lable-form-widget
import { addBasicFieldSchema  } from "@/components/form-designer/widget-panel/widgetsConfig";
import widget from "./lable-form-widget.vue";
const schema = {
  type: "lable-form",
  icon: "alert",
  formItemFlag: true,
  options: {
    name: "",
    label: "LableForm",
    columnWidth: "200px",
    defaultValue: "",
    disabled: false,
    hidden: false,
    labelAlign: "",
    labelHidden: false,
    labelWidth: null,
    readonly: false,
    size: "",
  },
};

export default (app) => {
  /*（ user：*/
  addBasicFieldSchema(schema); //加载组件Json Schema
  /* -------------------------------------------------- */
  app.component(widget.name, widget); //注册组件
};
