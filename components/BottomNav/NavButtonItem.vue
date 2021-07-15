<template>
  <button class="col-3">
    <img :src="iconImgSrc">
    <div>{{ buttonName }}</div>
  </button>
</template>

<script>
export default {
  name: 'NavButtonItem',
  props: {
    iconImgSrc: String,
    buttonName: String
  }
};
</script>

<style lang="scss" scoped>
  button {
    border: none;
    padding: 8px 0px 8px 0px;
  }
</style>
