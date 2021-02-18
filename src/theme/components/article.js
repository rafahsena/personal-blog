const articleTheme = {
  baseStyle: ({ colorMode }) => ({
    margin: { base: 4, lg: 16 },
    justifyContent: "center",
    textAlign: "justify",
    flex: 1,
    borderColor: colorMode === "light" ? "gray.300" : "gray.500",
    title: colorMode === "light" ? "blog.title.light" : "blog.title.dark",
  }),
};

export default articleTheme;
