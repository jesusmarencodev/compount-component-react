import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image bg-dark text-white" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        {/* Way two */}

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ background: "#70d1f8" }}>
          <ProductImage style={{
            boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"
          }} />
          <ProductTitle style={{
            fontWeight:"bold"
          }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
