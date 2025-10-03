import Footer from "../Ui/Organims/Footer/Footer"
import Header from "../Ui/Organims/Header/Header"

const Layout = ({ children }) => {
    return (
        <div>
            <header className="w-full">
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout