import PropTypes from "prop-types"
import useStock from "../hooks/useStock"
import { useNavigate } from "react-router-dom"

DeleteButton.PropTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string
}

export default function DeleteButton({ itemName}) {
const { deleteItem } = useStock()
const navigate = useNavigate()
    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja escluir a(o) ${ itemName}?`)) {
           deleteItem(itemId)
           navigate("/items")
        }
    }
    
    return (
        < button 
        onClick={handleDelete}>
        Excluir
     </button >
    )       
}