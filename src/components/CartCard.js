import useHover from "../useHooks/useHover"

function CartCard ({obj}) {
    // const [hovered, ref] = useHover()
    // const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="Cart__container">
            <h1>{obj.name}</h1>
            <img className="compareProducts__img" src={obj.url} alt={obj.alt}/>
            <h1>${obj.spec.cost}</h1>
        </div>
    )
}

export default CartCard