import { Link } from "react-router-dom"

function AuthorsList({ data }) {
    return (
        <aside className="md:w-1/4 w-full rounded-lg shadow-2xl p-4 h-fit">
            <h3 className="text-lg font-semibold mb-4 pb-2">نویسنده‌ها</h3>
            <div className="space-y-4">
                {data.authors.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-3 hover:shadow-md transition"
                    >
                        <img
                            className="w-24 h-24 rounded-full object-cover mb-2"
                            src={item.avatar.url}
                            alt={item.name}
                        />
                        <p className="font-medium text-gray-700">{item.name}</p>
                        <Link
                            className="text-gray-700 underline underline-offset-2 mt-1.5 mb-1 text-sm"
                            to={`/authors/${item.slug}`}
                        >
                            مشاهده رزومه
                        </Link>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default AuthorsList