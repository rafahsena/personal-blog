const articlesTheme = {
  baseStyle: ({ colorMode }) => ({
    padding: 4,
    flex: 1,
    borderBottom: "1px solid",
    borderColor: colorMode === "light" ? "gray.300" : "gray.500",
    title: colorMode === "light" ? "blog.title.light" : "blog.title.dark",
    _hover: {
      bg: colorMode === "light" ? "gray.100" : "gray.800",
      cursor: "pointer",
    },
  }),
};

export default articlesTheme;
