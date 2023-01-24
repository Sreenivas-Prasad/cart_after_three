import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import './index.css'
import EmptyCartView from '../EmptyCartView'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, totalAmount} = value
      return (
        <>
          <Header />
          {cartList.length > 0 ? (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                <div className="cart-quantity">
                  <h3>Order Total: RS {totalAmount}/-</h3>
                  <p>{cartList.length} item in your cart</p>
                  <button>Checkout</button>
                </div>
              </div>
            </div>
          ) : (
            <EmptyCartView />
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
