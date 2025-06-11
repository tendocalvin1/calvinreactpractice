

function Citizens(props){
    return (
        <div className="citizens">
        <p>{props.name}</p>
        <p>{props.country}</p>
        <p>{props.age}</p>
        <p>{props.city}</p>


        </div>
    );
}

export default Citizens