import "../scss/_myPlaces.scss";


function MyPlaces(props) {
    return (
        <div className={props.className}>
            <div className="description-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image-places">
                <img src={props.img1} alt="img"/>
                <img src={props.img2} alt="img"/>
            </div>
        </div>

    )
}

export default MyPlaces;

