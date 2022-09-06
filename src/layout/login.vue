<template>
  <a-form  layout="inline" class="demo-form-inline">
    <a-form-item label="userName:">
      <a-input v-model:value="formInline.userName" placeholder="Approved by" />
    </a-form-item>
    <a-form-item label="密码:">
      <a-input v-model:value="formInline.password" placeholder="Approved by" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="onSubmit">登录</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { reactive, inject } from "vue";
import cryptoJs from "crypto-js";

const formInline = reactive({
  userName: "admin",
  password: "Pass!23",
  secretKey: "",
});
const memberOption = inject("CoderMember") as any;
const onSubmit = () => {
  const data = {
    password: formInline.password,
    userName: formInline.userName,
    secretKey: "",
  };

  const secretKey = "xxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  data.password = cbcEncryptDes(data.password, secretKey);
  data.secretKey = cbcEncryptDes(secretKey, data.userName);

  memberOption.request
    .post(memberOption.path + "account/login", data)
    .then((resp: any) => {
      window.localStorage.setItem("token", "Coder " + resp.data.token);
      window.localStorage.setItem("userName", resp.data.user.userName);
      alert("登录" + resp.data.success);
    });
};

const cbcEncryptDes = (message: string, key: string) => {
  /* asp.net core key 只能是16长*/
  if (key.length < 16) {
    key = key.padEnd(16, "0");
  }

  if (key.length > 16) {
    key = key.substring(0, 16);
  }

  const keyHex = cryptoJs.enc.Utf8.parse(key);
  const ivHex = cryptoJs.enc.Utf8.parse("qAz1357908642PlM");
  const option = {
    iv: ivHex,
    mode: cryptoJs.mode.CBC,
    padding: cryptoJs.pad.Pkcs7,
  };
  const encrypted = cryptoJs.AES.encrypt(message, keyHex, option);
  return encrypted.toString();
};
</script>
