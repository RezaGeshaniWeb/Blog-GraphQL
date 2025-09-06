import { useMutation } from "@apollo/client/react"
import { useEffect, useRef, useState } from "react"
import { SEND_COMMENT } from "../graphql/mutation"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function BlogForm({ slug }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const [sendComment, { data, loading }] = useMutation(SEND_COMMENT, { variables: { name, email, text, slug } })

    const sendHandler = (e) => {
        e.preventDefault()

        if (name && email && text) {
            sendComment()
        } else {
            toast.warn("تمامی فیلدها باید پر شوند", {
                position: 'top-center'
            })
        }
    }

    useEffect(() => {
        if (data) {
            toast.success("کامنت ارسال شد و منتظر تایید میباشد", {
                position: 'top-center'
            })
            setName("")
            setEmail("")
            setText("")
        }
    }, [data])
    
    return (
        <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4">ارسال کامنت</h3>
            <form className="space-y-4 bg-gray-50 p-4 rounded-lg shadow">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder="نام کاربری ..."
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="ایمیل ..."
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="متن کامنت"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>
                {loading ?
                    <button disabled className="cursor-pointer px-6 py-2 bg-indigo-300 text-white rounded">در حال ارسال...</button>
                    :
                    <button
                        onClick={sendHandler}
                        className="cursor-pointer px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                    >
                        ارسال
                    </button>}
                <ToastContainer />
            </form>
        </section>
    )
}

export default BlogForm
