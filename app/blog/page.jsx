import React from "react";
import FirstBlog from "@/components/FirstBlog";
import OtherBlogs from "@/components/OtherBlogs";

async function fetchBlogs() {
  const res = await fetch("https://blogapp-platform.vercel.app//api/blog", {
    cache: "no-store",
  });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  return res.json();
}

const Blog = async () => {
  const blogs = await fetchBlogs();

  const firstBlog = blogs && blogs[0];
  const otherBlogs = blogs?.length > 0 && blogs.slice(1)
  return (
    <div>
      {blogs?.length > 0 ? (
        <>
        <div className="container">
          <h2 className="text-center my-10">
            <span className="text-purple-500">Trending</span>{" "}
            Blog
          </h2>
          <FirstBlog firstBlog={firstBlog} />
          <OtherBlogs otherBlogs={otherBlogs} />
        </div>
        </>
      ) : (
        <h3>No Blogs...</h3>
      )}
    </div>
  );
};

export default Blog;
