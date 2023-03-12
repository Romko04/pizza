import { Link } from "react-router-dom"

const EmtyCart = ()=>{
    return (
        <div className="cart cart--empty">
        <h2>Корзина пустая <span>😕</span></h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.<br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <Link to="/" className="button button--black">
          <Link className="button__cart-link" to={'/home'}>Вернуться назад</Link>
        </Link>
      </div>
    )
}
export default EmtyCart