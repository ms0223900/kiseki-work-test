<template>
  <div class="video-page-wrapper">
    <Header />
    <tag-list
      :selectedTagKey="selectedTagKey"
      :tagListData="tagListData"
      @toggle-tag="handleToggleTagKey"
    />
    <video-list :video-list-data="filteredVideoList" />
    <BottomNav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import mockVideoList from './mock_video_list.json';
import TagList from '~/components/Header/TagList.vue';
import { SingleTagData } from '~/components/Header/types';
import { SingleVideo } from '~/components/VideoPart/types';
import VideoList from '~/components/VideoPart/VideoList.vue';
import TagHandlers from '~/helpers/Handlers/TagHandlers';

export default Vue.extend({
  name: 'VideoPage',
  components: { VideoList, TagList },
  // 只有在page才能用asyncData
  data () {
    return ({
      selectedTagKey: TagHandlers.ALL_TAG,
      videoListData: mockVideoList as SingleVideo[]
    });
  },
  // async fetch () {
  //   const res = await fetch('./mock_video_list.json').then(res => res.json());
  //   console.log(res);
  //   this.videoListData = [];
  // },

  // async asyncData ({ $content }) {
  //   const videoListData = (await $content('videos').fetch<SingleVideo>());
  //   // console.log('videoListData: ', videoListData);
  //   const tagListData = ([
  //     ...new Set(videoListData.map((v: SingleVideo) => v.tag))
  //   ] as string[]).map(v => ({
  //     tagKey: v,
  //     tagName: v
  //   }));
  //   this.videoListData = (videoListData as SingleVideo[])

  //   return ({
  //     tagListData,
  //     videoListData
  //   });
  // },
  computed: {
    filteredVideoList (): SingleVideo[] {
      if (this.selectedTagKey === '' || this.selectedTagKey === TagHandlers.ALL_TAG) {
        return this.videoListData;
      }
      return this.videoListData.filter(v => (
        v.tag === this.selectedTagKey
      ));
    },
    tagListData (): SingleTagData[] {
      return TagHandlers.getTagList(this.videoListData);
    }
  },
  methods: {
    handleToggleTagKey (tagKey = '') {
      this.selectedTagKey = tagKey;
    }
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
