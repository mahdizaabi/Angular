export interface response {
  [key:string]: {
    title:string,
    content:string
  }
}

export interface Post {
  id?:string,
  title:string,
  content:string
}
