// I had to do this workaround because advanced theming doesn't support color mode
// https://github.com/chakra-ui/chakra-ui/issues/2231
const styles = {
  global: {
    ".custom-markdown": {
      ".chakra-ui-dark &": {
        h6: {
          color: "blog.title.dark",
        },
        a: {
          color: "blog.title.dark",
          borderColor: "blog.title.dark",
        },
      },
      h6: {
        color: "blog.title.light",
        fontSize: "md",
        fontWeight: "bold",
      },
      img: {
          margin: "0 auto"
      },
      a: {
        color: "blog.title.light",
        display: "inline",
        paddingBottom: "1px",
        borderBottom: "1px solid",
        borderColor: "blog.title.light",
        _hover: {
          border: "none"
        }
      },
    },
  },
};

export default styles;
