export interface SingleTagData {
  tagKey: string
  tagName: string
}

export interface TagItemProps extends SingleTagData {
  selectedTagKey: string
}

export interface TagListProps {
  tagListData: SingleTagData[]
  selectedTagKey: string
}
