import {useState, useContext } from "react"
import {Link} from "react-router-dom"
import {productContext} from "../productContext"
import ProductCard from "../components/ProductCard"
import CompareCard from "../components/CompareCard"


function Products () {

    const {allProduct, cartItems} = useContext(productContext)
    const {menuHeading} = useContext(productContext)

    const [sortBy, setSortBy] = useState()

    const productsElement = allProduct.map (obj => 
        <ProductCard key={obj.id} obj={obj} />
        )
    
    var itemCompareElement = null

    switch (sortBy) {
        case "byFlex":
            itemCompareElement = allProduct.filter(item => item.isCompare === true).sort(byFlex).map(obj=>
            <CompareCard key={obj.id} obj={obj} />);
           break;
        case "byCost":
            itemCompareElement = allProduct.filter(item => item.isCompare === true).sort(byCost).map(obj=>
            <CompareCard key={obj.id} obj={obj} />);
        break;
        case "byCurve":
            itemCompareElement = allProduct.filter(item => item.isCompare === true).sort(byCurve).map(obj=>
            <CompareCard key={obj.id} obj={obj} />);
        break;
        case "byModel":
            itemCompareElement = allProduct.filter(item => item.isCompare === true).sort(byModel).map(obj=>
            <CompareCard key={obj.id} obj={obj} />);
        break;
        case "byKick":
            itemCompareElement = allProduct.filter(item => item.isCompare === true).sort(byKick).map(obj=>
            <CompareCard key={obj.id} obj={obj} />);
        break;
        default: 
            itemCompareElement = allProduct.filter(item => item.isCompare === true).sort(byName).map(obj=>
                <CompareCard key={obj.id} obj={obj} />);
    }

    function byName (a, b){
        if (a.name > b.name){
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    }

    function byCost (a, b){
        if (a.spec.cost > b.spec.cost){
            return 1
        } else if (a.spec.cost < b.spec.cost) {
            return -1
        } else {
            return 0
        }
    }

    function byFlex (a, b){
        if (a.spec.flex > b.spec.flex){
            return 1
        } else if (a.spec.flex < b.spec.flex) {
            return -1
        } else {
            return 0
        }
    }
    function byCurve (a, b){
        if (a.spec.curve > b.spec.curve){
            return 1
        } else if (a.spec.curve < b.spec.curve) {
            return -1
        } else {
            return 0
        }
    }
    function byModel (a, b){
        if (a.spec.model > b.spec.model){
            return 1
        } else if (a.spec.model < b.spec.model) {
            return -1
        } else {
            return 0
        }
    }
    function byKick (a, b){
        if (a.spec.kickPoint > b.spec.kickPoint){
            return 1
        } else if (a.spec.kickPoint < b.spec.kickPoint) {
            return -1
        } else {
            return 0
        }
    }
    
    function toggleCompare(){
            document.body.classList.toggle("visible")
    }

    const cartMessage = (cartItems.length > 0)? cartItems.length: "Empty"

    return (
        <div className="products_container">
            <div className="product__CompareContainer">
                <div className="compare_nav">
                    <button className="product__closeCompareBtn actions" onClick={toggleCompare}>Close</button>
                    <Link className="products__linkCart nav__menuLink actions" to="/Cart">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i> {cartMessage} Shopping Cart
                    </Link>
                </div>
                <div className="product__headings">
                    <p className="product__heading1">{menuHeading.name} <button className="products__sortBtn" onClick={()=>setSortBy('byName')}> <i className="fas fa-sort-down"></i> </button></p>
                    <p className="product__heading2"></p>
                    <p className="product__heading3">{menuHeading.model} <button className="products__sortBtn" onClick={()=>setSortBy('byModel')}> <i className="fas fa-sort-down"></i> </button></p>
                    <p className="product__heading4">{menuHeading.cost} <button className="products__sortBtn" onClick={()=>setSortBy('byCost')}> <i className="fas fa-sort-down"></i> </button></p>
                    <p className="product__heading5">{menuHeading.curve} <button className="products__sortBtn" onClick={()=>setSortBy('byCurve')}> <i className="fas fa-sort-down"></i> </button></p>
                    <p className="product__heading6">{menuHeading.flex} <button className="products__sortBtn" onClick={()=>setSortBy('byFlex')}> <i className="fas fa-sort-down"></i> </button></p>
                    <p className="product__heading7">{menuHeading.kickPoint} <button className="products__sortBtn" onClick={()=>setSortBy('byKick')}> <i className="fas fa-sort-down"></i> </button></p>
                    <p className="product__heading8"></p>
                </div>
                {itemCompareElement}
            </div>

            <div className="product__productsContainer">
                <div className="products__grid">
                    {productsElement}
                </div>
            </div>
        </div>
    )
}


export default Products