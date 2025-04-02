import { Outlet } from "react-router-dom";
import ItemForm from "../../assets/Contexts/components/ItemForm";


export default function CreateItem() {
    return (
        <div>
            <ItemForm />
            <Outlet/>
        </div>
    )
}