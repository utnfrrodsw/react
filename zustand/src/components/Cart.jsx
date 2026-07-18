import { useState } from "react";
import { useCartStore, useCartStats } from "../store/cartStore";
import "./Cart.css";

const products = [
  { id: 1, name: "Camiseta", price: 25 },
  { id: 2, name: "Pantalón", price: 50 },
  { id: 3, name: "Zapatos", price: 75 },
];

const Cart = () => {
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);
  const { items, total, count } = useCartStats();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="shopping-container">
      <h2>Carrito de Compras con Zustand</h2>

      <h3>Productos Disponibles:</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => addItem(product)}>Añadir al carrito</button>
          </li>
        ))}
      </ul>

      <button className="open-cart-btn" onClick={() => setIsCartOpen(true)}>
        Mostrar Carrito ({count})
      </button>

      <div className={`cart-panel ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Tu Carrito</h3>
          <button
            className="close-cart-btn"
            onClick={() => setIsCartOpen(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="cart-body">
          {items.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    {item.name} x {item.quantity} - $
                    {item.price * item.quantity}
                    <button onClick={() => removeItem(item.id)}>
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <p className="cart-total">Total: ${total}</p>
              <button className="clear-cart-btn" onClick={clearCart}>
                Vaciar Carrito
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
