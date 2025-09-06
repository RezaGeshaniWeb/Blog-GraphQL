import Layout from "../layout/Layout";
import AuthorsList from "../components/AuthorsList";
import BlogsList from "../components/BlogsList";
import { useQuery } from "@apollo/client/react";
import { GET_AUTHORS_INFO, GET_BLOG_INFO } from "../graphql/queries";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function HomePage() {
    const authorsQuery = useQuery(GET_AUTHORS_INFO);
    const blogsQuery = useQuery(GET_BLOG_INFO);

    const loading = authorsQuery.loading || blogsQuery.loading;
    const error = authorsQuery.error || blogsQuery.error;

    if (loading) return <Loading />

    if (error) return <ErrorMessage />

    return (
        <Layout>
            <main className="flex flex-1 container mx-auto px-4 py-6 gap-6 flex-col md:flex-row">
                <AuthorsList data={authorsQuery.data} />
                <BlogsList data={blogsQuery.data} />
            </main>
        </Layout>
    )
}

export default HomePage;