import PropTypes from 'prop-types'

function ProductCard(props){
    return(
        <div className="productcard">
            <p>Name:{props.name}</p>
            <p>Price:{props.price}</p>
            <p>In Stock: {props.inStock ? "Yes" : "No"}</p>


        </div>


    );
}

ProductCard.propTypes ={
    name : PropTypes.string,
    price : PropTypes.number,
    InStock: PropTypes.bool,
}

ProductCard.defaultTypes = {
    name : "Product",
    price : 0,
    InStock : true
}


export default ProductCard