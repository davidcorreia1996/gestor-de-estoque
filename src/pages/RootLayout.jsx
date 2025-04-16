import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



export default function RootLayout() {
    return (
        <>
            <header>
                <Link to="/">REACT STOCK</Link>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/items/new">Novo item</Link>
                    <Link to="/items">Todos os itens</Link>
                </nav>
            </header>
            <div class="outlet">
                <Outlet/>
            </div>
            
            <footer>
                <p>Feito com React e React Router!</p>
            </footer>
        </>
    )
}