<template lang="pug">
  .video-item-wrapper
    .thumbnail-wrapper
      img(:src="videoData.thumbnail.src")
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
      title: String,
      channel: Object,
      viewsCount: Number,
      creationTime: Number,
      creationTimeLocale: String
    } as PropOptions<SingleVideo>
  },
  computed: {
    verifiedCount () {
      const viewsCount = this.videoData.viewsCount;
      if (viewsCount > 1000) {
        const num = (this.videoData.viewsCount / 1000).toFixed(1);
        return `${num} K`;
      }
      return viewsCount;
    },
    videoInfo () {
      return `${this.videoData.channel.name}·${this.verifiedCount} views·${this.videoData.creationTimeLocale}`;
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
    width: 100%;
  }
  .videoInfo {
    color: #aaa;
    font-size: 16px;
  }
</style>
