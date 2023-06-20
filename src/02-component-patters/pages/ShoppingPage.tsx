import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";



const product = {
  id: "1",
  title: "Coffee Mug",
  img: "coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Way one */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hola" />
          <ProductCard.Buttons />
        </ProductCard>

        {/* Way two */}
        {
          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle  />
            <ProductButtons />
          </ProductCard>
        }
      </div>
    </div>
  );
};

export default ShoppingPage;
