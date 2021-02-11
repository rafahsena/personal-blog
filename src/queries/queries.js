export const POSTS_QUERY = `{
    allArticles {
      id
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