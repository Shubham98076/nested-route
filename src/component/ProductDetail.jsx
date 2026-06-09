import { Link, useParams } from "react-router-dom";
function ProductDetail({ list }) {
    const {id} = useParams();
    const product = list.find((item)=>item.id === parseInt(id));
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width={300} />
      <p>Price: ${product.price}</p>\
      <p> {product.description}</p>
      <Link to>Go to ProductList</Link>
      
    </div>
  );
}

export default ProductDetail;