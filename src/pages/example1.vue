<template>
  <coder-label-demo />
</template>

<script setup>
import { ref, reactive } from "vue";
const activeKey = ref("1");
const onMessageTypeEdit = () => {
  messageTypeId.value = 0;
};
</script>
