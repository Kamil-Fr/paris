import "../../scss/_popularPlaces.scss"

function PopularPlaces(props) {
    return (
        <div className="first-popular">
            <div className="first-popular-image">
                <img src={props.image} alt="img"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
)
}

export default PopularPlaces