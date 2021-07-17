<template lang="pug">
  .taglist-wrapper
    TagItem(
      v-for="(tag, i) in tagListData"
      :key="i"
      :tagKey="tag.tagKey"
      :tagName="tag.tagName"
      :selectedTagKey="selectedTagKey"
      v-on:toggle-tag="$emit('toggle-tag', tag.tagKey)"
    )
</template>

<script lang="ts">
import Vue from 'vue';
import { PropsDefinition } from 'vue/types/options';
import TagItem from './TagItem.vue';
import { TagListProps } from './types';

export default Vue.extend({
  name: 'TagList',
  components: {
    TagItem
  },
  props: {
    tagListData: Array,
    selectedTagKey: String
  } as PropsDefinition<TagListProps>
});
</script>

<style lang="scss" scoped>
  .taglist-wrapper {
    position: sticky;
    top: 66px;
    z-index: 1;
    padding: 8px;
    background-color: #fff;
    box-shadow: 0px 4px 10px #ddd;
  }
</style>
