import {Component} from 'react';
import '/src/scss/_planner.scss'

class Rating extends Component {
    state = {
        name: '',
        rating: '',
        checkName: '',
        ratings: [],
        averageRating: null,
    };

    handleInputChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    };

    addRating = () => {
        const {name, rating} = this.state;

        if (!name || isNaN(rating) || rating < 1 || rating > 5) {
            alert('Wprowadź prawidłowe dane.');
            return;
        }

        const parsedRating = parseInt(rating, 10);

        const data = {name, rating: parsedRating};

        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                alert('Ocena została dodana.');
            })
            .catch((error) => {
                console.error('Błąd:', error);
            });
    };

    getRating = () => {
        const {checkName} = this.state;

        fetch(`http://localhost:3000/comments?name=${checkName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length === 0) {
                    this.setState({ratings: [], averageRating: null});
                } else {
                    const ratings = data.map((entry) => entry.rating);
                    const averageRating = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;

                    this.setState({ratings, averageRating});
                }
            })
            .catch((error) => {
                console.error('Błąd:', error);
            });
    };

    render() {
        return (
            <div className="PlannerTripS">
                <h1>Ratings</h1>
                <div className="input-container">
                    <label htmlFor="name">Name of place:</label>
                    <input
                        type="text" id="name" placeholder="File name" onChange={this.handleInputChange}/>
                    <label htmlFor="rating">Your rate (1-5):</label>
                    <input type="number" id="rating" min="1" max="5" onChange={this.handleInputChange}/>
                    <button className="btn btn-success " onClick={this.addRating}>Add your rate</button>
                </div>
                <div className="result-container">
                    <label htmlFor="checkName">Check the ratings for the place:</label>
                    <input type="text" id="checkName" placeholder="File name" onChange={this.handleInputChange}/>
                    <button className="btn btn-success " onClick={this.getRating}>Check ratings</button>
                    <div>
                        {this.state.ratings.length > 0 ? (
                            <div>
                                Ratings for {this.state.checkName}: {this.state.ratings.join(', ')}<br/>
                                Average rating: {this.state.averageRating.toFixed(2)}
                            </div>
                        ) : (
                            <div>There are no ratings for this place.</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Rating;


