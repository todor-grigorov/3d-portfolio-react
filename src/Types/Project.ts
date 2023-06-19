export type Project = {
  name: string
  description: string
  image: string
  source_code_link: string
  tags: Tag[]
}

export type Tag = {
  name: string
  color: string
}
