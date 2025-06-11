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


export default ProductCard