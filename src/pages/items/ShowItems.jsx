import DeleteButton from "../../assets/Contexts/components/DeleteButton"
import useStock from "../../assets/Contexts/hooks/useStock"
import { useParams } from "react-router-dom"
   
    export default function ShowItem(){
        const { getItem } = useStock()
        const { id } = useParams()

        const item = getItem(id)
    
   
    return (
        <div className="item">
            <h2>{item.name}</h2>
            <Link to={`/items/${item.id}/update`}>Atualizar</Link>
            <DeleteButton itemId={item.id} itemName={itemName}/>
            <div>
                <span>Categoria: {item.category}</span>
                <span>Quantidade em estoque: {item.quantity}</span>
                <span>Preço: R$ {item.price}</span>
            </div>
            <p>{item.description}</p>
            <div>
                <p>Cadastrado em: {item.creatdAt.toDateString()}</p>
                <p>Atualizado em: {item.updatedAt.toDateString()}</p>
            </div>
        </div>
    )
}