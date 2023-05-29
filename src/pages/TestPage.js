import React, { useState, useEffect } from 'react';
import axios from 'axios'


const TestPage = () => {

const [ cityName, setCityName ] = useState('Warszawa')
const [ temp, setTem ] = useState(``);
const [ wind, setWind ] = useState(``);
// const [ data , setData ] = useState([]);
const APIKey = `63a9fbabdb6f727ddcaabd1c4ee81d8a` // kod prywatny ze strony


const getApiData = () => { 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName === `` ? `Berlin` : cityName}&appid=${APIKey}`)

      .then(function (response) {
        // handle success
        setTem(response.data.main.temp)
        setWind(response.data.wind.speed)
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error); 
      })
      .finally(function () {
        // always executed
      });
};
// const dataMap = () =>{
//     if(data.length !== 0){
//        return data.map((element, index ) => {
//             return(
//                 <div key={index}>
//                     <p>{element.name}</p>
//                 </div>
//             )
//         })
//     } else{
//         return null
//     }
// }
// const API = 'https://randomuser.me/api/'
const hanleOnChangeInput = (event) =>{
       setCityName(event.target.value)
}
    return(
        <div style={{width: `100vw`, fontSize: "4rem"}}>
            <input type="text" value={cityName} onChange={hanleOnChangeInput} />
            <button onClick={getApiData}> Get Api Date</button>
            <p>Temperatura: {temp}</p>
            <p>Wiatr: {wind}</p>
        </div>

    )
}

export default TestPage

// hasło na open weather
// Ratal
// Ximxim1235
