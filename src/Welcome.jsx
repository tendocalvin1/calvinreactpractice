import PropTypes from 'prop-types'

function Welcome(props){
    return(

        <div className='welcome'>
            <p>Hello {props.name }!</p>


        </div>
        
    );
}

export default Welcome