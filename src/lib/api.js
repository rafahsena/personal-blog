import { GraphQLClient } from "graphql-request";

const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;

export const request = ({ query, variables, preview }) => {
  const endpoint = preview ? API_URL : `${API_URL}/preview`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  });

  return client.request(query, variables);
};
