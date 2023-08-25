import "../scss/_myPlaces.scss"
import Coupole1 from "../images/Coupole1.jpg";
import Coupole2 from "../images/Coupole2.jpg";
import MyPlaces from "../components/Recommendations/MyPlaces.jsx";
import Viaduc1 from "../images/Viaduc1.jpg"

function MyPlacesData() {
    return (

        <div>
            <div className="myPlaces">
                <h1 >Our places recommendations </h1>
                <p className="Sec-title">Your first trip? Let's know popular places in Paris!</p>
            </div>
            <MyPlaces
                className="first-place"
                heading="The Galeries Lafayette Coupole"
                text="The Galeries Lafayette Coupole stands as a magnificent architectural gem in the heart of Paris. This iconic dome, an exquisite example of Art Nouveau design, graces the skyline above the renowned Galeries Lafayette department store. With its intricate ironwork and stunning glass canopy, it epitomizes the elegance and grandeur of the city.

Completed in 1912, La Coupole is not just an architectural marvel but also a symbol of luxury shopping in the French capital. Beneath its graceful curves and ornate detailing, shoppers find a world of high-end fashion, beauty, and lifestyle brands.

The interior is equally impressive, featuring a soaring central atrium bathed in natural light, and a stunning stained glass window that adds to the overall allure. Whether you're indulging in retail therapy or simply admiring its beauty, La Coupole des Galeries Lafayette is a must-see destination in Paris, blending history, art, and fashion seamlessly under one remarkable roof."
                img1={Coupole1}
                img2={Coupole2}
            />

            <MyPlaces
                className="first-place-reverse"
                heading="The Viaduc des Arts"
                text="The Viaduc des Arts, located in the heart of Paris, is a remarkable urban regeneration project that breathes new life into a historic railway viaduct. Stretching along Avenue Daumesnil in the 12th arrondissement, this innovative space has transformed old railway arches into vibrant artisan workshops, galleries, and green spaces.

Visitors can explore a diverse range of crafts, from pottery and jewelry to furniture design and textiles, all created by skilled artisans. The Viaduc des Arts also houses boutiques showcasing contemporary art and design, making it a haven for art enthusiasts and shoppers alike.

As you stroll along this elevated promenade, you're treated to lush gardens and scenic views, creating a serene contrast to the bustling city below. It's a unique blend of urban renewal and greenery, making the Viaduc des Arts a hidden gem where Paris's industrial past meets its creative present, offering a delightful and enriching experience for all who venture here."
                img1={Viaduc1}
                img2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Promenade_plant%C3%A9e_et_briques_parisiennes_%2826841715942%29.jpg/1280px-Promenade_plant%C3%A9e_et_briques_parisiennes_%2826841715942%29.jpg"
            />
        </div>


    )
}


export default MyPlacesData;