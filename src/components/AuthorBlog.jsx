import { Link } from "react-router-dom"

function AuthorBlog({ author }) {
    return (
        <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                مقالات {author.name}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {author.post.map((item) => (
                    <div
                        key={item.slug}
                        className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col"
                    >
                        <img
                            className="w-full h-48 object-cover"
                            src={item.coverPhoto.url}
                            alt={item.title}
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                {item.title}
                            </h4>
                            <Link
                                to={`/blogs/${item.slug}`}
                                className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white text-center py-2 px-4 rounded transition"
                            >
                                مطالعه مقاله
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AuthorBlog