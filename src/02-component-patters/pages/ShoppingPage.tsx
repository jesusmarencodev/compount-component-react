import ProductCard from "../components/ProductCard";

const product = {
    
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
        <ProductCard />
      </div>
    </div>
  );
};

export default ShoppingPage;
