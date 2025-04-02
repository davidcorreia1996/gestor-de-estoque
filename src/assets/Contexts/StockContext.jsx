import { createContext } from "react";
import PropTypes from "prop-types"
import { useState } from 'react'; // Adicione esta linha no topo do arquivo
import DeleteButton from "./components/DeleteButton";

export const StockContext = createContext({})
StockContextProvider.propTypes = {
    children: PropTypes.node
}

export function StockContextProvider ({ children}) {
    const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('obc-react-stock')
    if (!storedItems) return []
    const items = JSON.parse(storedItems)
    items.forEach((item) => {
        item.createdAt = new Date(item.createdAt)
        item.updatedAt = new Date (item.updatedAt)
    })
    return items  
    })

    const addItem = (item) => {
        setItems(currentState => {
            const updateItems = [item, ...currentState]
            localStorage.setItem('obc-react-stock', JSON.stringify(updateItems))
            return updateItems
        })
    }

    const getItem = (itemId) => {
        return items.find(item => item.id === +itemId)
    }

    const updateItem = (itemId, newAttributes) => {
        setItems ( currentState => {
            const itemIndex = currentState.findIndex(item => item. id === itemId)
            const updateItem = [...currentState]
            Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date () })
        })
    }

    const deleteItem = (itemId) => {
        setItems(currentState => {
            const updateItems = currentState.filter(item => item.id !== itemId) 
            localStorage.setItem('obc-react-stock', JSON.stringify(updateItems))
            return updateItems
        })
    }

    const stock = {
        items,
        addItem,
        getItem,
        deleteItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}