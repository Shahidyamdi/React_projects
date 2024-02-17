import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
function DisplayFlights() {
  const {from,to,departureDate} = useParams()
  const [flightData,setFlightData] = useState([])
  const [isLoading,setLoading]=useState(true)
  useEffect(()=>{
    axios.get('http://localhost:8080/flightservices/flights?from='+from+'&to='+to
    +'&departureDate='+departureDate).then(res=>{
      setFlightData(res.data);
      setLoading(false);
    })
  })
  return (
    <div>
      <h2>Flights:</h2>
      <table>
        <thead>
            <th>Airlines</th>
            <th>Departure City</th>
            <th>Arrival City</th>
            <th>Departure Date and Time</th>
        </thead>
        <tbody>
          {!isLoading?flightData.map(flight=><RowCreator item={flight}/>):""}
        </tbody>
      </table>
    </div>
  );
}

function RowCreator(props){
  var flight = props.item;

  return <tr>
    <td>{flight.operatingAirlines}</td>
    <td>{flight.departureCity}</td>
    <td>{flight.arrivalCity}</td>
    <td>{flight.estimatedDepartureTime}</td>
    <td><Link to={'/passengerDetails/'+flight.id}>Select</Link></td>
  </tr>
}
export default DisplayFlights;

















