<template lang="pug">
  .header-wrapper
    .logo
      img(src="/yt-icon.png")
    div.right-col
      button.search-btn
        BIconSearch
      .user-icon
        | P
</template>

<script>
import { BIconSearch } from 'bootstrap-vue';
export default {
  name: 'Header',
  components: {
    BIconSearch
  }
};
</script>

<style lang="scss" scoped>
  .header-wrapper {
    position: sticky;
    top: 0px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: #fff;
  }
  .logo {
    width: 100px;
    img {
      width: 100%;
    }
  }
  .right-col {
    display: flex;
    .search-btn {
      border: none;
      background-color: transparent;
      font-size: 24px;
      padding: 8px 24px;
    }
    .user-icon {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      background-color: #00f;
      color: #fff;
      font-size: 24px;
      line-height: 48px;
      text-align: center;
    }
  }
</style>
