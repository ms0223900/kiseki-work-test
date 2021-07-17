export interface SingleVideo {
  title: string
  tag: string //
  videoDuration: number // seconds
  type: string
  thumbnail: {
    name: string
    src: string
  }
  channel: {
    name: string
    link: string
    imgSrc: string
  }
  viewsCount: number
  creationTime: number
  creationTimeLocale: string
}
