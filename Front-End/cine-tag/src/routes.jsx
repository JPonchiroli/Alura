import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesProvider from "./contexts/Favorites";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  );
}
