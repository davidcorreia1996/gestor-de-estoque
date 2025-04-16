import { Outlet } from "react-router-dom";
import ItemsTable from "../../assets/Contexts/components/ItemsTable";

export default function ListItems() {
    return (
        <div>
            <h2>Todos itens!!</h2>
            <ItemsTable/>
            
        </div>
    )
}