import React from "react";
import { Tag } from "@chakra-ui/react";

const TagComponent = ({ tagName, ...restProps }) => {
  
  return (
    <Tag
      size="md"
      key={tagName}
      variant="solid"
      colorScheme="purple"
      {...restProps}
    >
      {tagName}
    </Tag>
  );
};

export default TagComponent;
