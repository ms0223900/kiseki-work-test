<template>
  <div class="row bottom-nav-wrapper">
    <nav-button-item
      v-for="(button, i) in buttonListData"
      :key="i"
      v-bind="button"
    >
      <template #icon>
        <component :is="button.iconName" />
      </template>
    </nav-button-item>
  </div>
</template>

<script>
import { BIconHouse, BIconBarChartFill, BIconCollectionPlay, BIconJournalAlbum } from 'bootstrap-vue';
import NavButtonItem from './NavButtonItem.vue';
const buttonListData = [
  {
    iconName: 'BIconHouse',
    buttonName: 'Home'
  },
  {
    iconName: 'BIconBarChartFill',
    buttonName: 'Trending'
  },
  {
    iconName: 'BIconCollectionPlay',
    buttonName: 'Subscriptions'
  },
  {
    iconName: 'BIconJournalAlbum',
    buttonName: 'Library'
  }
];

export default {
  name: 'BottomNav',
  components: {
    NavButtonItem,
    BIconHouse,
    BIconBarChartFill,
    BIconCollectionPlay,
    BIconJournalAlbum
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
