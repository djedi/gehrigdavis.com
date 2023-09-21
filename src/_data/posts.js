const fs = require("fs");
const path = require("path");
const grayMatter = require("gray-matter");

module.exports = function () {
  const postsDir = "./src/posts/";

  const posts = fs
    .readdirSync(postsDir)
    .filter((file) => path.extname(file) === ".md")
    .map((file) => {
      const postContent = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = grayMatter(postContent);
      return {
        title: data.title || file.replace(/\.md$/, ""),
        slug: data.slug || file.replace(/\.md$/, ""),
        url: `/posts/${data.slug || file.replace(/\.md$/, "")}/`,
      };
    });

  return {
    posts,
  };
};
