import FavoritesProvider from "../../contexts/Favorites";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

export default function BasePage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Outlet />
            </FavoritesProvider>
            <Footer />
        </main>
    )
}