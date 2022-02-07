import {useContext} from "react"
import {productContext} from "../productContext"
import CartCard from "../components/CartCard"

function Cart () {

    const {cartItems} = useContext(productContext)

    const cartElement = cartItems.map(obj=>
        <CartCard key={obj.id} obj={obj}/>
    )

    return (
        <div className="cart__container">
            <div className="cart__itemsDetails">
                <h1>Items</h1>
                {cartElement}
            </div>
            <div>
                <h1>Summary</h1>
            </div>
        </div>
    )
}

export default Cart;