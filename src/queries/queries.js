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
