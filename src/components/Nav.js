import {Link} from "react-router-dom"
import { useContext } from "react"
import {productContext} from "../productContext"

function Nav () {
    const {allProduct, cartItems} = useContext(productContext)
    function toggleCompare(){
            document.body.classList.toggle("visible")
    }
    const itemCompareElement = allProduct.filter(item => item.isCompare === true)

    const compareMessage = (itemCompareElement.length > 0)? `Compare ${itemCompareElement.length} Items`: "Check Circle to Compare"
    const cartMessage = (cartItems.length > 0)? cartItems.length: "Empty"

    return (
        <div className="nav__banner">
            <p className="nav__linkProduct actions"><Link className="nav__menuLink" to="/">Browse Sticks</Link></p>
            <p className="nav__linkCart actions">
                <Link className="nav__menuLink" to="/Cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> {cartMessage} Shopping Cart
                </Link></p>
            <p className="nav_button actions" onClick={toggleCompare}>
                <Link className="nav__menuLink" to="/">
                    <i className="fas fa-eye"></i> {compareMessage}
                </Link></p>
        </div>
    )
}

export default Nav