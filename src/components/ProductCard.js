import React, {useContext} from "react"
import {productContext} from "../productContext"
import useHover from "../useHooks/useHover"
import PropTypes from "prop-types"

function ProductCard ({obj}) {

    const {toggleCompare, cartItems, removeFromCart, addToCart} = useContext(productContext)
    const [hovered, ref] = useHover()

    function compareIcon() {
        if (obj.isCompare){
            return <i className="fa fa-check-circle compare actions" aria-hidden="true" onClick={()=> toggleCompare(obj.id)}></i>
        } else if(hovered) {
            return <i className="fa fa-circle-o uncompare actions" onClick={() => toggleCompare(obj.id)}></i>
        }
    }

    // function compareIcon() {
    //     if (window.screen.width < 800) {
    //         if (obj.isCompare) {
    //             return <i className="fa fa-check-circle compare actions" aria-hidden="true" onClick={()=> toggleCompare(obj.id)}></i>
    //         } else {
    //             return <i className="fa fa-circle-o uncompare actions" onClick={() => toggleCompare(obj.id)}></i>
    //         }
    //     } else {
    //         if (obj.isCompare) {
    //             return <i className="fa fa-check-circle compare actions" aria-hidden="true" onClick={()=> toggleCompare(obj.id)}></i>
    //         } else if(hovered) {
    //             return <i className="fa fa-circle-o uncompare actions" onClick={() => toggleCompare(obj.id)}></i>
    //         }
    //     }
    // }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === obj.id)
        if(alreadyInCart) {
            return <i className="fa fa-cart-arrow-down cart" aria-hidden="true" onClick={() => removeFromCart(obj.id)}></i>
        } else if(hovered) {
            return <i className="fa fa-cart-plus removeFromCart" aria-hidden="true" onClick={() => addToCart(obj)}></i>
        }
    }

    return (
        <div className="ProductCard__container" ref={ref}>
            <h1>{obj.name}</h1>
            <div className="productCard__imgContainer">
                <img className="productCard__img" src={obj.url} alt={obj.alt} />
                {compareIcon()}
                {cartIcon()}
                
            </div>
            <p>${obj.spec.cost}</p>
        </div>
    )
}

ProductCard.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default ProductCard