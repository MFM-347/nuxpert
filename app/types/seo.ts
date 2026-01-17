export interface Meta {
  title?: string
  description?: string
  url?: string
  author?: string
}

export interface Icons {
  favicon?: string
  icon?: string
  appleTouchIcon?: string
}

export interface useSeoOpts {
  meta?: Meta
  icons?: Icons
}
