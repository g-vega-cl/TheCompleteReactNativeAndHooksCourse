import React, { useState } from "react";

const BlogContext = React.createContext({
  blogPosts: [{ title: "" }],
  addBlogPost: () => {},
});

interface listItem {
  title: string;
}

export const BlogProvider: React.FC = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<listItem[]>([{ title: "Blog 1" }, { title: "Blog 2" }]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  const contextObject = {
    blogPosts,
    addBlogPost,
  };

  

  return (
    <BlogContext.Provider value={contextObject}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
