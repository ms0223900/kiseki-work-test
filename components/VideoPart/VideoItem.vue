<template>
  <div class="video-item-wrapper">
    <div class="thumbnail-wrapper">
      <img :src="videoData.thumbnail.src">
    </div>
    <div class="row title-wrapper">
      <div class="col-1">
        <img>
      </div>
      <div class="col-11">
        <h3>{{ videoData.title }}</h3>
      </div>
    </div>
  </div>
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
      creationTime: Number
    } as PropOptions<SingleVideo>
  }
});
</script>
<style lang="scss" scoped>
  .video-item-wrapper {
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
    flex-wrap: nowrap;
  }
  .thumbnail-wrapper {
    width: 100%;
  }
</style>
