export const ALL_ARTICLES = `query GetArticles($filter: ArticleModelFilter) {
    allArticles(filter: $filter) {
      id
      tag
      title
      _publishedAt
      slug
    }
  }`;

export const GET_ARTICLE = `query GetArticle($filter: ArticleModelFilter) {
  article(filter: $filter) {
    id
    tag
    title
    _publishedAt
    slug
    content
  }
}`;

export const NEXT_ARTICLE = `query GetNextArticle($date: DateTime, $slug: String) {
  allArticles(
    first: 1, 
    filter: {
      slug: { neq: $slug }, 
      _publishedAt: { gte: $date }
    }) {
      title
      slug
    }
}`;

export const PREVIOUS_ARTICLE = `query GetNextArticle($date: DateTime, $slug: String) {
  allArticles(
    first: 1, 
    filter: {
      slug: { neq: $slug }, 
      _publishedAt: { lte: $date }
    }) {
      title
      slug
    }
}`;