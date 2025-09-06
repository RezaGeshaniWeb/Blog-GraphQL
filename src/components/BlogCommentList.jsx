import { useQuery } from "@apollo/client/react"
import { GET_POST_COMMENT } from "../graphql/queries"

function BlogCommentList({ slug }) {
    const { data } = useQuery(GET_POST_COMMENT, { variables: { slug } })

    return (
        <section>
            <h3 className="text-xl font-semibold mb-4">کامنت‌ها</h3>
            <ul className="space-y-4">
                {
                    data && data.comments.map((item, i) => {
                        return (
                            <li
                                key={i}
                                className="bg-white text-lg p-4 rounded-lg shadow hover:shadow-md transition text-gray-700"
                            >
                                <span className="font-bold underline underline-offset-2 italic">{item.name}</span> : {item.text}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default BlogCommentList