import { Grid, useStyleConfig } from "@chakra-ui/react";
import React from "react";

export const BlogContainer = React.memo((props) => {
  const style = useStyleConfig("BlogContainer");

  return (
    <Grid
      {...props}
      {...style}
      direction="row"
      templateColumns={{lg: "20% 80%" }}
      display={{sm: "block", lg: "grid"}}
    />
  );
});

export default BlogContainer;
