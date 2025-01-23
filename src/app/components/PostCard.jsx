
const PostCard = ({ post }) => {
    return (
        <div className="card bg-base-100  md:h-[440px] lg:h-96 border border-base-300  shadow-xl flex flex-col justify-between p-5">
        <div className="card-body flex-grow">
          <h2 className="card-title">Title: {post.title}</h2>
          <p className="flex-grow"><span className="font-bold mr-2">Description:</span>{post.body}</p>
        </div>
        <div className="card-actions">
          <button className="btn w-full btn-neutral">View Details</button>
        </div>
      </div>
      
    );
};

export default PostCard;