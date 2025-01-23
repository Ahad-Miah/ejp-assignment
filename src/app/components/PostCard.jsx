import Link from "next/link";

const PostCard = ({ post }) => {
    return (
        <div className="card bg-base-100  md:h-96 lg:h-96 border border-base-300  shadow-xl flex flex-col justify-between p-5">
        <div className="card-body flex-grow">
          <h2 className="card-title">Title: {post.title}</h2>
          <p className="flex-grow"><span className="font-bold mr-2">Description:</span>{post.body.slice(0,100)}.....</p>
        </div>
        <div className="card-actions">
          <Link className="w-full" href={`/details/${post.id}`}>
          <button className="btn w-full btn-neutral">View Details</button></Link>
        </div>
      </div>
      
    );
};

export default PostCard;