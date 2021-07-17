import { SingleVideo } from '~/components/VideoPart/types';

const TagHandlers = {
  ALL_TAG: 'ALL',

  makeTagData (tagKey: string, name?: string) {
    return ({
      tagKey,
      tagName: name || tagKey
    });
  },
  getTagStrs (videoList: SingleVideo[]) {
    const allTagStrs = [
      ...new Set(videoList.map((v: SingleVideo) => v.tag))
    ];
    return allTagStrs;
  },
  getTagList (videoList: SingleVideo[]) {
    const tags = this.getTagStrs(videoList).map(v => this.makeTagData(v));
    return ([
      this.makeTagData(this.ALL_TAG, 'All'),
      ...tags
    ]);
  }
};

export default TagHandlers;
