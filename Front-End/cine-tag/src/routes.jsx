import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesProvider from "./contexts/Favorites";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  );
}
