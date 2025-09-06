import { Link } from "react-router-dom";

function BlogsCard({ item }) {
    return (
        <div
            key={item.id}
            className="shadow-2xl rounded-lg overflow-hidden border border-gray-300 transition flex flex-col"
        >
            <div className="flex items-center gap-2 p-3">
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={item.author.avatar.url}
                    alt={item.author.name}
                />
                <p className="text-sm font-medium text-gray-700">
                    {item.author.name}
                </p>
            </div>
            <img
                className="w-full h-48 object-cover"
                src={item.coverPhoto.url}
                alt={item.title}
            />
            <div className="p-4 flex flex-col flex-1">
                <h4 className="font-semibold text-gray-800 mb-3">
                    {item.title}
                </h4>
                <div className="mt-auto">
                    <Link to={`blogs/${item.slug}`}>
                        <button className="cursor-pointer w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition">
                            مطالعه مقاله
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogsCard;