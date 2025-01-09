import { useEffect, useState } from "react";

import Card from "../components/dashboard-card";

// COLORS
import Colors from "../constants/colors";

// TEST DATA
import { widgets } from "../test-data/test";

const Dashboard = () => {

    const [randomBgs, setRandomBgs] = useState([]);

    useEffect(() => {
        const assignColors = () => {
            return widgets.map(() => {

                const randomIndex = Math.floor(Math.random() * Colors.length);
                return Colors[randomIndex];
            })
        }
        setRandomBgs(assignColors());
    }, [])

    return ( 
        <div className="container">
            <div className="inner">
                {
                    widgets.map((item, index) => (
                      <Card key={index} text={item.title} color="#f0f0f0" data={item.data}/>
                    ))
                }
           </div>
        </div>
     );
}
 
export default Dashboard;