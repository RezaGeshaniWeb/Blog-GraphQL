import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
    query {
        posts {
            title
            slug
            id
            createdAt
            coverPhoto {
                url
            }
            author {
                name
                avatar {
                    url
                }
            }
        }
    }
`;

const GET_AUTHORS_INFO = gql`
    query {
        authors {
            name
            slug
            avatar {
                url
            }
        }
    }
`;

const GET_AUTHOR_INFO = gql`
    query getAuthorInfo($slug: String!) {
        author(where: {slug: $slug}) {
            avatar {
                url
            }
            field
            name
            description {
                html
            }
            post {
                coverPhoto {
                    url
                }
                id
                slug
                title
            }
        }
    }
`;

const GET_POST_INFO = gql`
    query getPost($slug: String!) {
        post(where: {slug: $slug}) {
            author {
                avatar {
                    url
                }
                field
                name
            }
            content {
                html
            }
            title
            coverPhoto {
                url
            }
        }
    }
`;

const GET_POST_COMMENT = gql`
    query getPostComments($slug: String!) {
        comments(where: {post: {slug: $slug}}) {
            id
            name
            text
        }
    }
`;

export { GET_BLOG_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO, GET_POST_COMMENT }