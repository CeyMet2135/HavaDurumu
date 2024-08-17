
import { useState } from 'react';
import './App.css';
import CityCard from './components/card/CityCard';
import Header from './components/hero/Header';
import axios from 'axios';
import { toast } from 'react-toastify';


function App() {
  const [location, setLoction] = useState("")
  const [data, setData] = useState({})
  const [cities, setCities] = useState([])

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=764d4cda591d5752542efbea542869ba`



  // add city to card
  const addCityToCard = (data) => {
    const cityExists = cities.find(city => city.name === data.name)
    if (!cityExists) {
      setCities([...cities, data])
    } else {
      toast.error("City already exists")
    }


  }





  // create function to get date
  const searchSehir = () => {
    axios.get(url).then(response => {
      setData(response.data);
      addCityToCard(response.data)
    })
      .catch(error => {
        console.log(error.response)
        if (error.request.status === 404)
          toast.error(error.response.data.message)
      })


  }


  // create function to get date
  // const url = 
  return (
    <div className="app">
      <div className="over"></div>
      <div className="content">
        <Header location={location} setLoction={setLoction} searchSehir={searchSehir} />



        <CityCard cities={cities} />


      </div>
    </div>
  );
}

export default App;
