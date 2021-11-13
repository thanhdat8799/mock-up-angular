export interface IArticles {
    articles: Article[]
    articlesCount: number
}
  
export interface Article {
    slug: string
    title: string
    description: string
    body: string
    createdAt: string
    updatedAt: string
    tagList: string[]
    favorited: boolean
    favoritesCount: number
    author: Author
}
  
export interface Author {
    username: string
    bio?: string
    image?: string
    following: boolean
}
export interface ITag {
    tags: string[]
}
export interface IArticlePost {
    article: {
        title: string
        description: string
        body: string
        tagList?: string[]
    }
}