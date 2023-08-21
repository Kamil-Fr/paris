import "../scss/_myPlaces.scss"
import MainImg from "../images/MainImg.jpg"
import HistoryImg from "../images/HistoryImg.webp";
import MyPlaces from "../components/MyPlaces.jsx"

function MyPlacesData() {
    return (

        <div>
            <div className="myPlaces">
                <h1>Our places recommendations </h1>
                <p>Your first trip? Let's know popular places in Paris!</p>
            </div>
            <MyPlaces
                className="first-place"
                heading="Louvre"
                text="The Louvre (English: /ˈluːv(rə)/ LOOV(-rə)),[4] or the Louvre Museum (French: Musée du Louvre [myze dy luvʁ] (listen)), is a national art museum in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo. The museum is housed in the Louvre Palace, originally built in the late 12th to 13th century under Philip II. Remnants of the Medieval Louvre fortress are visible in the basement of the museum. Due to urban expansion, the fortress eventually lost its defensive function, and in 1546 Francis I converted it into the primary residence of the French Kings.[5]"
                img1={MainImg}
                img2={HistoryImg}
            />

            <MyPlaces
                className="first-place-reverse"
                heading="Notre-Dame de Paris"
                text="Notre-Dame de Paris (French: [nɔtʁ(ə) dam də paʁi] (listen); meaning  Our Lady of
                Paris), referred to simply as Notre-Dame,[a] is a medieval Catholic cathedral on the Île de la Cité (an island in the Seine River), in the 4th arrondissement of Paris, France. The cathedral, dedicated to the Virgin Mary, is considered one of the finest examples of French Gothic architecture. Several attributes set it apart from the earlier Romanesque style, particularly its pioneering use of the rib vault and flying buttress, its enormous and colourful rose windows, and the naturalism and abundance of its sculptural decoration.[5] Notre-Dame also stands out for its three pipe organs (one historic) and its immense church bells.[6]"
                img1={HistoryImg}
                img2={MainImg}
            />
        </div>


    )
}


export default MyPlacesData;