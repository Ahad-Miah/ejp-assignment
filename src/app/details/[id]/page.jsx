import React from 'react';

const BlogDetails = async ({params}) => {
    const { id } = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
    return (
        <div className='container mx-auto px-8 mt-14'>
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
      </div>

      <div className="text-lg text-gray-700 space-y-4 sm:text-xl md:text-2xl">
        <p>{post.body}</p>
      </div>
    </div>
        </div>
    );
};

export default BlogDetails;