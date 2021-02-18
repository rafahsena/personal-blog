import { Grid, useStyleConfig } from "@chakra-ui/react";

export const BlogContainer = (props) => {
  const style = useStyleConfig("BlogContainer");

  return (
    <Grid
      direction="row"
      templateColumns={{lg: "20% 80%" }}
      {...props}
      {...style}
    />
  );
};

export default BlogContainer;
