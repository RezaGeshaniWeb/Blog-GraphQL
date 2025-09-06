import { Link } from "react-router-dom"

function BlogInfo({ post }) {
    return (
        <>
            <Link
                to="/"
                className="inline-block mb-6 text-indigo-600 hover:underline"
            >
                ← بازگشت به خانه
            </Link>

            <div className="relative w-full h-64 md:h-96 mb-8">
                <img
                    src={post.coverPhoto.url}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <h1 className="absolute bottom-4 left-4 text-white text-2xl md:text-4xl font-bold drop-shadow-lg bg-black/40 px-4 py-2 rounded">
                    {post.title}
                </h1>
            </div>

            {/* Author info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 rounded-lg p-4 shadow mb-8">
                <div className="flex items-center space-x-4">
                    <img
                        src={post.author.avatar.url}
                        alt={post.author.name}
                        className="w-16 h-16 rounded-full border-2 border-indigo-500 object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{post.author.name}</h3>
                        <p className="text-sm text-gray-500">{post.author.field}</p>
                    </div>
                </div>
            </div>

            {/* Post content */}
            <div className="prose prose-lg max-w-none mb-12">
                <p>{post.content.html.replace(/<[^>]+>/g, "")}</p>
            </div>
        </>
    )
}

export default BlogInfo
