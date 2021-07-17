<template lang="pug">
  button(class="col-3")
    slot(name="icon")
    div {{ buttonName }}
</template>

<script>
import { BIcon } from 'bootstrap-vue';
export default {
  name: 'NavButtonItem',
  components: {
    BIcon
  },
  props: {
    buttonName: String
  }
};
</script>

<style lang="scss" scoped>
  button {
    border: none;
    padding: 8px 0px 8px 0px;
    &:hover {
      background-color: #ddd;
    }
  }
</style>
