import React from "react";

const Page = async () => {
  const request = await fetch("https://dummyjson.com/posts");
  const data = await request.json();
  return (
    <div className="p-2">
      <div className="text-center text-3xl font-bold text-black">
        Hello from posts
      </div>
      <ul className="text-center">
        {data.posts.map((item: any) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
