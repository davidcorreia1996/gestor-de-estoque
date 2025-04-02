import { Link, Outlet } from "react-router-dom";

export default function ItemsLayout() {
    return (
        <main>
            <h1>Stock Items</h1>
            <Outlet/>
            <div>
                <Link to="/items/id">Todos os itens</Link>
                <Link to="/items/new">Novo item</Link>
            </div>
          
        </main>
    )
}