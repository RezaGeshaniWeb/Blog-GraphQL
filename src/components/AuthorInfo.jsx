import { Link } from "react-router-dom"

function AuthorInfo({ author }) {
    return (
        <>
            <Link
                to="/"
                className="inline-block mb-6 text-indigo-600 hover:underline"
            >
                ← بازگشت به خانه
            </Link>
            <section className="flex flex-col md:flex-row md:items-center gap-6 bg-white rounded-lg shadow p-6 mb-10">
                <img
                    className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
                    src={author.avatar.url}
                    alt={author.name}
                />
                <div className="flex-1 text-center md:text-right">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{author.name}</h2>
                    <p className="text-gray-600 mb-4">{author.field}</p>
                    <p className="text-gray-700 leading-relaxed">
                        {author.description.html.replace(/<[^>]+>/g, "")}
                    </p>
                </div>
            </section>
        </>
    )
}

export default AuthorInfo