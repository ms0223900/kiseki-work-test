<template>
  <div>
    <h1>Videos</h1>
    <video-list :video-list-data="videoListData" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VideoList from '~/components/VideoPart/VideoList.vue';
export default Vue.extend({
  name: 'VideoPage',
  components: { VideoList },
  // 只有在page才能用asyncData
  async asyncData ({ $content }) {
    const videoListData = await $content('videos').fetch().catch((e) => {
      console.log(e);
    });
    console.log('videoListData: ', videoListData);
    return ({
      videoListData
    });
  }
});
</script>
<style>

</style>
