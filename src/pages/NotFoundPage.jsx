import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

function NotFoundPage() {
  return (
    <Layout>
      <div className="flex-1 min-h-[100vh] flex flex-col items-center justify-center bg-gray-100 px-6">
        <h1 className="text-8xl font-extrabold mb-4">404</h1>
        <p className="text-2xl mb-6">Page not found</p>
        <Link
          to="/"
          className="inline-block mb-6 text-indigo-600 hover:underline"
        >
          ← بازگشت به خانه
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage