export const POSTS_QUERY = `{
    allArticles {
      id
      tag
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
      title
      createdAt
    }
  }`