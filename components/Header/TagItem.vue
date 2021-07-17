<template lang="pug">
  .wrapper
    button(
      @click="$emit('toggle-tag')"
      :class="isSelected ? 'selected' : ''"
    ) {{ tagName }}
</template>

<script lang="ts">
import Vue from 'vue';
import { PropsDefinition } from 'vue/types/options';
import { TagItemProps } from './types';

export default Vue.extend({
  name: 'TagItem',
  props: {
    tagKey: String,
    tagName: String,
    selectedTagKey: String
  } as PropsDefinition<TagItemProps>,
  computed: {
    isSelected () {
      return this.selectedTagKey === this.tagKey;
    }
  }
});
</script>

<style lang="scss" scoped>
  .wrapper {
    display: inline-block;
    padding-right: 8px;
    button {
      min-width: 60px;
      padding: 4px 8px;
      border: none;
      background-color: #eee;
      color: #333;
      border-radius: 2500px;
      transition: .2s;
      &.selected, &:hover {
        background-color: #333;
        color: #fff;
        transition: .2s;
      }
    }
  }
</style>
