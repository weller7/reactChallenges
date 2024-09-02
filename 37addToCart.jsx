import * as React from "react";

const products = [
  { id: 1, name: "Poké Ball", price: 10 },
  { id: 2, name: "Great Ball", price: 20 },
  { id: 3, name: "Ultra Ball", price: 30 },
];

//Use reduce to multiply the price by the quantity and add it to the total
function calculateTotal(cart) {
  return cart.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
}

const initialState = [];

function reducer(cart, action) {
  if (action.type === "add") {
    //First check if the item is alredy in the cart
    const inCart = Boolean(cart.find((item) => item.id === action.id));

    //If it's not in the cart
    if (!inCart) {
      const product = products.find((p) => p.id === action.id);
      //Spread all the existing items in cart
      //The new product in the cart is what the product was but with the quantity of 1
      return [...cart, { ...product, quantity: 1 }];
    }

    //If the item is alredy in the cart, set the quantity to be whatever the quantity was + 1
    // if the id doesnt match the action just return the item
    return cart.map((item) => {
      return item.id === action.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else if (action.type === "update") {
    //if the adjustmen is an increment
    if (action.adjustment === "increment") {
      //Do the same map every item and if the id is the same as the action add 1 to the quantity
      return cart.map((item) => {
        return item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    }

    //If the item is in the cart
    const item = cart.find((item) => item.id === action.id);

    //If the quantity is 1
    if (item.quantity === 1) {
      //Filter out the id of that item
      return cart.filter((item) => item.id !== action.id);
    } else {
      //If not decrease the quantity by 1
      return cart.map((item) => {
        return item.id === action.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    }
  } else {
    throw new Error("That action type isnt supported");
  }
}

export default function ShoppingCart() {
  const [cart, dispatch] = React.useReducer(reducer, initialState);

  const handleAddToCart = (id) => dispatch({ type: "add", id });

  const handleUpdateQuantity = (id, adjustment) => {
    dispatch({
      type: "update",
      id,
      adjustment,
    });
  };

  return (
    <main>
      <h1>Poké Mart</h1>

      <section>
        <div>
          <ul className="products">
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button
                  className="primary"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr />
      <aside>
        <div>
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}
                <div>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "decrement")}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "increment")}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
            {!cart.length && <li>Cart is empty</li>}
          </ul>
        </div>
        <hr />

        <h3>Total: ${calculateTotal(cart)}</h3>
      </aside>
    </main>
  );
}
