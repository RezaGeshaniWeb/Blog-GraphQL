import BlogsCard from "./BlogsCard";

function BlogsList({data}) {
    return (
        <section className="md:w-3/4 w-full">
            <h3 className="text-lg font-semibold mb-4 pb-2">مقالات</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data && data.posts.map((item, i) => <BlogsCard item={item} key={i} />)}
            </div>
        </section>
    )
}

export default BlogsList;