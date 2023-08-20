import "../scss/_popularPlaces.scss"
import Navigation from "../components/Navigation.jsx";
import MainImg from "../images/MainImg.jpg"
import HistoryImg from "../images/HistoryImg.webp";

function PopularPlaces () {
    return(
      <div className="popularPlaces">
          <h1>Popular places</h1>
          <p>Your first trip? Let's know popular places in Paris!</p>

          <div className="first-place">
          <div className="description-text">
              <h2>Louvre</h2>
              <p>The Louvre (English: /ˈluːv(rə)/ LOOV(-rə)),[4] or the Louvre Museum (French: Musée du Louvre [myze dy luvʁ] (listen)), is a national art museum in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo. The museum is housed in the Louvre Palace, originally built in the late 12th to 13th century under Philip II. Remnants of the Medieval Louvre fortress are visible in the basement of the museum. Due to urban expansion, the fortress eventually lost its defensive function, and in 1546 Francis I converted it into the primary residence of the French Kings.[5]</p>
          </div>
              <div className="image-places">
                  <img src={MainImg} alt="img"/>
                  <img src={HistoryImg} alt="img"/>
              </div>
          </div>
      </div>
    )
}



export default PopularPlaces;