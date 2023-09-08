const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            <h4>{product.name}</h4>
            <img src={product.imagelink} className="img-fluid" style={{height:'200px', width:'200px'}}/>
            <p><strong>Price: </strong>{product.price}</p>
            <p><strong>Details: </strong>{product.details}</p>
            <p>{product.createdAt}</p>
        </div>
    )
}

export default ProductDetails