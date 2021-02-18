import React from "react";
import { Tag } from "@chakra-ui/react";

const TagComponent = React.memo(({ tagName, ...restProps }) => {
  return (
    <Tag size="md" variant="solid" colorScheme="purple" {...restProps}>
      {tagName}
    </Tag>
  );
});

export default TagComponent;
