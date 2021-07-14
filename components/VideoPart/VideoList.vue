/* eslint-disable vue/attribute-hyphenation */
<template>
  <div class="video-list-wrapper">
    <div class="row">
      <VideoItem
        v-for="(video, i) in videoListData"
        :key="i"
        :videoData="video"
        class="col-12 col-md-4 col-lg-3"
      />
    </div>
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
    .row {
      width: 100%;
      // margin: 0px;
    }
  }
</style>
