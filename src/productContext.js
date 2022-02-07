import React, {useState, useEffect, createContext} from "react"

const productContext = createContext()

function ContextProvider({children}) {
    const [allProduct, setAllProduct] = useState([])
    const [menuHeading, setMenuHeading] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const urlSticks = "http://localhost:8000/sticks"
    const urlTemplate = "http://localhost:8000/template"

    useEffect(() => {
        fetch(urlSticks)
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    useEffect(() => {
        fetch(urlTemplate)
            .then(res => res.json())
            .then(data => setMenuHeading(data))
    }, [])

    function toggleCompare(id) {
        const updatedArr = allProduct.map(obj => {
            if(obj.id === id) {
                return {...obj, isCompare: !obj.isCompare}
            }
            return obj
        })
        
        setAllProduct(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }
    
    return (
        <productContext.Provider value={{
            allProduct,
            menuHeading, 
            toggleCompare,
            cartItems,
            addToCart,
            removeFromCart,
            emptyCart
        }}>
            {children}
        </productContext.Provider>
    )
}

export {ContextProvider, productContext}