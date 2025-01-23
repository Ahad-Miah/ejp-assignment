import Head from "next/head";
import PostCard from "./components/PostCard";
export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="container mx-auto px-4">
      <Head>
      <title>BlogSphere || Home</title>
    </Head>
    <div>
      <h1 className="font-bold text-center my-12 text-2xl ">Explore All Posts</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center mb-32">
     {
      posts.map(post=><PostCard key={post.id} post={post}></PostCard>)
     }
    </div>
    </div>
  );
}
