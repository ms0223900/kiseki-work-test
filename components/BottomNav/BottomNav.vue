<template>
  <div class="row bottom-nav-wrapper">
    <nav-button-item
      v-for="(button, i) in buttonListData"
      :key="i"
      :iconImgSrc="button.iconImgSrc"
      :buttonName="button.buttonName"
    />
  </div>
</template>

<script>
import NavButtonItem from './NavButtonItem.vue';
const buttonListData = [
  {
    iconImgSrc: 'https://via.placeholder.com/48x48',
    buttonName: 'Home'
  },
  {
    iconImgSrc: 'https://via.placeholder.com/48x48',
    buttonName: 'Trending'
  },
  {
    iconImgSrc: 'https://via.placeholder.com/48x48',
    buttonName: 'Subscriptions'
  },
  {
    iconImgSrc: 'https://via.placeholder.com/48x48',
    buttonName: 'Library'
  }
];

export default {
  name: 'BottomNav',
  components: {
    NavButtonItem
  },
  data () {
    return ({
      buttonListData
    });
  }
};
</script>

<style lang="scss" scoped>
  .bottom-nav-wrapper {
    position: fixed;
    bottom: 0px;
    width: 100%;
    margin: 0px;
    background-color: #fff;
  }
</style>
