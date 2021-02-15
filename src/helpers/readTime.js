const countWords = (str) => {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(" ").length;
};

const readTime = (text) => {
  const words = countWords(text);
  return Math.ceil(words / 200);
};

export default readTime;
