import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {useNavigate} from "react-router-dom"


function PassengerDetails() {
  const {flightId} = useParams()
  const [data,setData] = useState()
  const [isLoading,setLoading]=useState(true)
  const [passengerFirstName,setPassengerFirstName] = useState()
  const [passengerLastName,setPassengerLastName] = useState()
  const [passengerMiddleName,setPassengerMiddleName] = useState()
  const [passengerEmail,setPassengerEmail] = useState()
  const [passengerPhone,setPassengerPhone] = useState()
  const [cardNumber,setCardNumber] = useState()
  const [expiryDate,setExpiryDate] = useState()
  const [securityCode,setSecurityCode] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8080/flightservices/flights/'+flightId).then(res=>{
      setData(res.data);
      setLoading(false);
    })
  })

  const handleSubmit=(event)=>{
    event.preventDefault();
    const data={
      flightId:flightId,
      passengerFirstName:passengerFirstName,
      passengerLastName:passengerLastName,
      passengerMiddleName:passengerMiddleName,
      passengerEmail:passengerEmail,
      passengerPhone:passengerPhone,
      cardNumber:cardNumber,
      expiryDate:expiryDate,
      securityCode:securityCode
    }

    axios.post('http://localhost:8080/flightservices/reservations',data)
    .then(res=>{
      navigate('/confirmReservation/'+res.data.id)
    })
  }

  return (
    <div>
      <h2>Confirm Reservation:</h2>
      <h2>Flight Details:</h2>
      Airline: {!isLoading?data.operatingAirlines:""}<br/>
      Departure City: {!isLoading?data.departureCity:""}<br/>
      Arrival City: {!isLoading?data.arrivalCity:""}<br/>
      Departure Date: {!isLoading?data.dateOfDeparture:""}<br/>
      <h2>Passenger Details</h2>
      <form>
      First Name: <input type="text" name="passengerFirstName" onChange={e=>setPassengerFirstName(e.target.value)}/><br/>
      Last Name: <input type="text" name="passengerLastName" onChange={e=>setPassengerLastName(e.target.value)}/><br/>
      Middle Name: <input type="text" name="passengerMiddleName" onChange={e=>setPassengerMiddleName(e.target.value)}/><br/>
      Email: <input type="text" name="passengerEmail" onChange={e=>setPassengerEmail(e.target.value)}/><br/>
     Phone: <input type="text" name="passengerPhone" onChange={e=>setPassengerPhone(e.target.value)}/><br/>
     <h2>Card Details</h2>
      Card Number: <input type="text" name="cardNumber" onChange={e=>setCardNumber(e.target.value)}/><br/>
      Expirty Date: <input type="text" name="expiryDate" onChange={e=>setExpiryDate(e.target.value)}/><br/>
      Security Code: <input type="text" name="securityCode" onChange={e=>setSecurityCode(e.target.value)}/><br/>
    <button onClick={handleSubmit.bind(this)}>Confirm</button>




      </form>

    </div>
  );
}

export default PassengerDetails;
