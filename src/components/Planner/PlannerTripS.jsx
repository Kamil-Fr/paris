import { useState } from 'react';
import PlannerTrip from './PlannerTrip';
import "/src/scss/_planner.scss";

function PlannerTripS() {
    const [liczbaZadan, setLiczbaZadan] = useState(0);

    const handleLiczbaZadanChange = (event) => {
        setLiczbaZadan(parseInt(event.target.value));
    };

    const renderPlannerTrips = () => {
        const zadania = [];
        for (let i = 0; i < liczbaZadan; i++) {
            zadania.push(<PlannerTrip key={i} numerListy={i + 1} />);
        }
        return zadania;
    };

    return (
        <div className="PlannerTripS">
            <h1>Days of Your trip!</h1>
            <div>
                <label htmlFor="liczbaZadan" >Number of day's trip: </label>
                <input className="form-control-lg-2"
                    type="number"
                    id="liczbaZadan"
                    value={liczbaZadan}
                    onChange={handleLiczbaZadanChange}
                />
                <button onClick={() => setLiczbaZadan(0) } className="btn btn-warning">Clear</button>
            </div>
            {renderPlannerTrips()}
        </div>
    );
}

export default PlannerTripS;