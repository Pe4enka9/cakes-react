import './main.css';
import Header from "./components/Header/Header.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Order from "./components/Order/Order.jsx";

export default function App() {
    return (
        <>
            <Header/>
            <main>
                <Catalog/>
                <Order/>
            </main>
        </>
    )
}
