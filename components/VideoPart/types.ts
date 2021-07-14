export interface SingleVideo {
  thumbnail: {
    name: string
    src: string
  }
  title: string
  channel: {
    name: string
    link: string
  }
  viewsCount: number
  creationTime: number
}
