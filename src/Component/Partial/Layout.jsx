import Header from "../Ui/Organims/Header/Header"

const Layout = ({ children }) => {
    return (
        <div>
            <header className="w-full">
                <Header />
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    )
}

export default Layout