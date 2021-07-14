export interface SingleVideo {
  title: string
  videoDuration: number // seconds
  type: string
  thumbnail: {
    name: string
    src: string
  }
  channel: {
    name: string
    link: string
  }
  viewsCount: number
  creationTime: number
}
