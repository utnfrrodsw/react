/* eslint-disable no-case-declarations */
import React, { useReducer, useState } from 'react';
import './Carrito.css'; // Importamos el archivo CSS

// 1. Definir el estado inicial del carrito
const initialState = {
  items: [],
  total: 0,
};

// 2. Definir las acciones posibles
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

// 3. Definir el reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex >= 0) {
        const updatedItems = state.items.map(item =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          items: updatedItems,
          total: state.total + newItem.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...newItem, quantity: 1 }],
          total: state.total + newItem.price,
        };
      }

    case REMOVE_ITEM:
      const itemIdToRemove = action.payload;
      const itemToRemove = state.items.find(item => item.id === itemIdToRemove);

      if (itemToRemove) {
        const updatedItems = state.items.filter(item => item.id !== itemIdToRemove);
        return {
          ...state,
          items: updatedItems,
          total: state.total - (itemToRemove.price * itemToRemove.quantity),
        };
      }
      return state;

    default:
      return state;
  }
};

// 4. Crear el componente Carrito
const Carrito = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItemToCart = (product) => {
    dispatch({ type: ADD_ITEM, payload: product });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Datos de ejemplo de productos
  const products = [
    { id: 1, name: 'Camiseta', price: 25 },
    { id: 2, name: 'Pantalón', price: 50 },
    { id: 3, name: 'Zapatos', price: 75 },
  ];

  return (
    <div className="shopping-container">
      <h2>Carrito de Compras</h2>

      <h3>Productos Disponibles:</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} <button onClick={() => addItemToCart(product)}>Añadir al carrito</button>
          </li>
        ))}
      </ul>

      <button className="open-cart-btn" onClick={toggleCart}>
        Mostrar Carrito ({state.items.length})
      </button>

      <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Tu Carrito</h3>
          <button className="close-cart-btn" onClick={toggleCart}>
            <span aria-hidden="true">&times;</span> {/* Símbolo de la cruz */}
          </button>
        </div>
        <div className="cart-body">
          {state.items.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul>
              {state.items.map(item => (
                <li key={item.id}>
                  {item.name} x {item.quantity} - ${item.price * item.quantity}
                  <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
                </li>
              ))}
              <p className="cart-total">Total: ${state.total}</p>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrito;