import ItemForm from "../../assets/Contexts/components/ItemForm"
import useStock from "../../assets/Contexts/hooks/useStock"
import { useParams } from "react-router-dom"

export default function UpdateItem() {
     const { getItem } = useStock()
            const { id } = useParams()
    
            const item = getItem(id)
    return (
        <>
        <h2>Atualizar item!!</h2>
        <ItemForm itemToupdate={item}/>
        </>
        
    )
}