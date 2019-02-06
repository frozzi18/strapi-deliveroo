/* /lib/apollo.js */

/*

To connect our application with GraphQL we will use Apollo 
and the next-apollo implementation to wrap our components in 
a withData HOC to give them access to make apollo data queries.

There are a couple differnt approaches to implementing GraphQL into 
a Nextjs app, the approach we will take is extracting the Apollo logic
into lib file and wrapping our components with a Higher Order 
Component called withData to handle the GQL queries inside each 
respective components.

COnnect client to query

*/

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "http://localhost:1337/graphql", // Server URL (must be absolute)
  })
};
export default withData(config);