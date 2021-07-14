<template>
  <div>
    <img :src="videoData.thumbnail.src">
    <div class="container col-12">
      <div class="col-1">
        <div>
          <img>
        </div>
        <div>
          <title>{{ videoData.title }}</title>
        </div>
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

<style>

</style>
