<template lang="pug">
  .video-item-wrapper
    .thumbnail-wrapper
      img(:src="videoData.thumbnail.src")
      .video-duration-info {{ videoDurationInfo }}
    .row.title-wrapper
      .col-2.channel-img-wrapper
        img(
          :src="videoData.channel.imgSrc"
        )
      .col-10
        h3 {{ videoData.title }}
        .videoInfo {{ videoInfo }}
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { SingleVideo } from './types';

export default Vue.extend({
  name: 'VideoItem',
  props: {
    videoData: {
      thumbnail: {
        name: String,
        src: String
      },
      videoDuration: Number,
      title: String,
      channel: Object,
      viewsCount: Number,
      creationTime: Number,
      creationTimeLocale: String
    } as PropOptions<SingleVideo>
  },
  computed: {
    videoDurationInfo () {
      const duration = this.videoData.videoDuration;
      const hours = Math.floor(duration / (60 * 60));
      const mins = Math.floor((duration - hours * 60 * 60) / 60);
      const secs = duration - hours * 60 * 60 - mins * 60;
      const times = [hours, mins, secs];
      // console.log(times);
      return times.filter(t => t > 0).join(':');
    },
    verifiedCount () {
      const viewsCount = this.videoData.viewsCount;
      if (viewsCount > 1000) {
        const num = (this.videoData.viewsCount / 1000).toFixed(1);
        return `${num} K`;
      }
      return viewsCount;
    },
    videoInfo () {
      return `${this.videoData.channel.name}\n·${this.verifiedCount} views·${this.videoData.creationTimeLocale}`;
    }
  }
});
</script>
<style lang="scss" scoped>
  .video-item-wrapper {
    padding: 8px;
    // padding-right: 16px;
    img {
      width: 100%;
    }
    h3 {
      font-size: 1.25em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .title-wrapper {
    padding: 8px 0px;
    margin: 0px;
    flex-wrap: nowrap;
  }
  .channel-img-wrapper {
    padding: 0px;
    margin: 0px;
    img {
      width: 100%;
      border-radius: 100000px;
      overflow: hidden;
    }
  }
  .thumbnail-wrapper {
    position: relative;
    width: 100%;
    .video-duration-info {
      position: absolute;
      bottom: 4px;
      right: 4px;
      padding: 4px;
      border-radius: 2px;
      background-color: #222;
      color: #fff;
      font-size: 14px;
    }
  }
  .videoInfo {
    color: #aaa;
    font-size: 16px;
    white-space: pre-wrap
  }
</style>
