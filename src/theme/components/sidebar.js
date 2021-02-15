const sidebarTheme = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === "light" ? "#E2E8F0" : "#202225",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Open Sans',sans-serif",
    color: colorMode === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)",
  }),
};

export default sidebarTheme;
