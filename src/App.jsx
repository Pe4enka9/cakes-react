import './assets/main.css';
import Header from "./components/Header/Header.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";

export default function App() {
    return (
        <>
            <Header/>
            <main>
                <Catalog/>
            </main>
        </>
    )
}
