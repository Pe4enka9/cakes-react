import './main.css';
import Header from "./components/Header/Header.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Order from "./components/Order/Order.jsx";
import Confectioner from "./components/Confectioner/Confectioner.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";

export default function App() {
    return (
        <>
            <Header/>
            <main>
                <Catalog/>
                <Order/>
                <Confectioner/>
                <Reviews/>
            </main>
        </>
    )
}
