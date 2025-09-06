import { useQuery } from "@apollo/client/react";
import { GET_POST_INFO } from "../graphql/queries";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";
import BlogInfo from "../components/BlogInfo";
import BlogForm from "../components/BlogForm";
import BlogCommentList from "../components/BlogCommentList";
import ErrorMessage from "../components/ErrorMessage";

function BlogPage() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(GET_POST_INFO, {
        variables: { slug },
    });

    if (loading) return <Loading />

    if (error) return <ErrorMessage />

    const post = data.post;

    return (
        <Layout>
            <main className="container mx-auto px-4 py-8">
                <BlogInfo post={post} />

                <BlogForm slug={slug} />

                <BlogCommentList slug={slug} />
            </main>
        </Layout>
    )
}

export default BlogPage;