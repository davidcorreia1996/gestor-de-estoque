import useStock from "../assets/Contexts/hooks/useStock"

export default function Home (){
    const { items } = useStock()


    const diversity = items.length
    const inventoryTotal = items.reduce((sum, item) => +sum + +item.quantity, 0)

    const today = new Date()
    const limitDate = new Date()
    limitDate.setDate(limitDate.getDate() - 10)
    const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
    const recentTotal = recentItems.length

    const lowQuantityItems = items.filter((item) => item.quantity < 10)
    const lowQuantityTotal = lowQuantityItems.length
    return (
        <main class="principal" >
            <h1>Página Inicial</h1>
            <div class="cards-container">
                <div class="card">
                    <p>Diversidade de itens</p>
                    <span>{diversity}</span>
                
                </div>
            
                <div class="card">
                    <p>Inventário Total</p>
                    <span>{inventoryTotal}</span>
                </div>
            
            
                <div class="card">
                    <p>Itens acabando</p>
                    <span>{lowQuantityTotal}</span>
                </div>
            </div>
        </main>
    )
}