/* eslint-disable vue/attribute-hyphenation */
<template>
  <div class="video-list-wrapper">
    <transition-group name="fade" class="row">
      <VideoItem
        v-for="(video, i) in videoListData"
        :key="i"
        :videoData="video"
        class="col-12 col-md-4 col-lg-3"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VideoItem from './VideoItem.vue';

export default Vue.extend({
  name: 'VideoList',
  components: { VideoItem },
  props: {
    videoListData: {
      type: Array,
      default: () => []
    }
  }
  // async asyncData ({ $content }) {
  //   const videoListData = await $content('videoList.content').fetch().catch((e) => {
  //     console.log(e);
  //   });
  //   return ({
  //     videoListData
  //   });
  // }
  // data () {
  //   return ({
  //     videoListData: []
  //   });
  // }
});
</script>

<style lang="scss" scoped>
  .video-list-wrapper {
    padding: 8px;
    padding-bottom: 88px;
    .row {
      width: 100%;
      margin: 0px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
