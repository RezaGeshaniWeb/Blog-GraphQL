import Footer from "./Footer"
import MyHeader from "./MyHeader"

function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <MyHeader />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
