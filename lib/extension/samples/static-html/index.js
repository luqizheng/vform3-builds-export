import { addBasicFieldSchema  } from "@/components/form-designer/widget-panel/widgetsConfig";
import widget from "./static-html-widget.vue";
const schema = {
  type: "static-html",
  icon: "alert",
  formItemFlag: true,
  options: {
    label: "static-html",
    name: "",
    defaultValue:null,
    hiddeLabel: false,
  },
};

export default (app) => {

  /*（ user：*/
  addBasicFieldSchema(schema); //加载组件Json Schema
  /* -------------------------------------------------- */
  app.component(widget.name, widget); //注册组件
};
