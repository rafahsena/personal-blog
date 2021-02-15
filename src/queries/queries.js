export const ALL_ARTICLES = `{
    allArticles {
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
    content {
      ... on TextRecord {
        text
      }
      ... on ImageRecord {
        image {
          url()
        	alt()
        }
      }
    }
  }
}`;
