/* eslint-disable vue/attribute-hyphenation */
<template>
  <div class="video-list-wrapper">
    <div>
      <VideoItem
        v-for="(video, i) in videoListData"
        :key="i"
        :videoData="video"
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

<style>

</style>
