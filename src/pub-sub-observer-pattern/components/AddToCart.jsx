import eventBus from "../eventBus";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const AddToCart = () => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    const product = products[randomIndex];
    eventBus.publish("cart:add", {
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };
  return (
    <div>
      <h2>Publisher</h2>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  );
};

export default AddToCart;
