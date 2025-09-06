import { useQuery } from "@apollo/client/react";
import { Link, useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import Layout from "../layout/Layout";
import Loading from "../components/Loading";
import AuthorInfo from "../components/AuthorInfo";
import AuthorBlog from "../components/AuthorBlog";
import ErrorMessage from "../components/ErrorMessage";

function AuthorPage() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(GET_AUTHOR_INFO, { variables: { slug } });

    if (loading) return <Loading />

    if (error) return <ErrorMessage />

    const author = data.author;

    return (
        <Layout>
            <main className="container mx-auto px-4 py-8 font-sans">
                <AuthorInfo author={author} />
                <AuthorBlog author={author} />
            </main>
        </Layout>
    )
}

export default AuthorPage;