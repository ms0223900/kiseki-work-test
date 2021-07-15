<template>
  <div class="video-page-wrapper">
    <Header />
    <video-list :video-list-data="videoListData" />
    <BottomNav />
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
    // console.log('videoListData: ', videoListData);
    return ({
      videoListData
    });
  }
});
</script>
<style lang="scss" scoped>
  .video-page-wrapper {
    .row {
      margin: 0px;
    }
    // .col-* {
    //   padding: 0px;
    // }
  }
</style>
