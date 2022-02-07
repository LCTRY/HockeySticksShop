import {useContext} from "react"
import {productContext} from "../productContext"

function CompareCard({obj}){

    const {toggleCompare,addToCart, cartItems} = useContext(productContext)
    
    function cartBtn() {
        const alreadyInCart = cartItems.some(item => item.id === obj.id)
        if(!alreadyInCart) {
            return <button className="compareCard__addCartbtn actions"  onClick={() => addToCart(obj)}>Add to <i className="fa fa-shopping-cart " aria-hidden="true"></i> </button>
        }
    }

    return (
        <div className="compareCard__container">
            <p className="compareCard__column1">{obj.name}</p>
            <img className="compareProducts__img compareCard__column2" src={obj.url} alt={obj.alt}/>
            <p className="compareCard__column3">{obj.spec.model}</p>
            <p className="compareCard__column4">${obj.spec.cost}</p>
            <p className="compareCard__column5">{obj.spec.curve}</p>
            <p className="compareCard__column6">{obj.spec.flex}</p>
            <p className="compareCard__column7">{obj.spec.kickPoint}</p>
            <div className="compareCard__btns">
                <button className="compareCard__removebtn actions" onClick={() => toggleCompare(obj.id)}> Remove </button>
                {cartBtn()}
            </div>
        </div>
    )
}

export default CompareCard