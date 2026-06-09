import { Link } from "react-router-dom";
function Products({list}){
return(
    <>
    <h1>Product List</h1>
    <div className="product-list">
    {
        list.map((product) => (
            <div key={product.id} className="product-item">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} width={150} />
                <p>{product.price}</p>
                <Link to={`/productlist/${product.id}`}>View Details</Link>
            </div>
            
        ))
        
    }
    </div>
    </>
)
}

export default Products;