import {useState} from "react";
import axios from "axios";


function App() {

  const [data, setData] = useState({});
  const [city, setCity] = useState('');

  const key = '726c142202df0003c3e1861212821985';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

  const searchWeather = (e)=>{
      if(e.key === "Enter") {
          axios.get(url).then(res=>{
              setData(res.data)
          }).catch((error)=> {
                  setData(error.response.data);
          })
          setCity('')

          // fetch(url)
          //     .then(res=>res.json())
          //     .then(res=>{
          //     setData(res)})
          // setCity('')
      }
  }

  return (
    <div className="App">
      <div className='inp-field'>
        <input type="text"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        placeholder="Enter location"
        onKeyDown={searchWeather}/>
      </div>

        <div className="container">
            <div className="err">
                {(data.cod === '404') && (
                    <h1>
                        {`Таке місто відсутнє`}
                    </h1>
                )}
            </div>
            <div className="header">
                <div className="city">
                    <p>{data.name}</p>
                </div>
            </div>
            <div className="temp">
                {data.main && (
                    <h1>
                        {`${data.main.temp.toFixed()} `}
                        °C
                    </h1>
                )}
            </div>
            <div className="desc">
                {data.weather && (
                    <p>
                        {data.weather[0].main}
                    </p>
                )}
            </div>
        </div>
        {data.name !== undefined && (
            <div className="footer">
                <div className="feels">
                    <p>Відчувається як:</p>
                    {data.main && (
                        <p className="bold">
                            {`${data.main.feels_like.toFixed()} `}
                            °C
                        </p>
                    ) }

                </div>
                <div className="humidity">
                    <p>Вологість:</p>
                    {data.main && (
                        <p className="bold">
                            {`${data.main.humidity} `}
                            %
                        </p>
                    )}

                </div>
                <div className="wind">
                    <p>Швидкість вітру:</p>
                    {data.wind && (
                        <p className="bold">
                            {`${data.wind.speed.toFixed(1)} `}
                            м/с
                        </p>
                    )}

                </div>

            </div>
        )}
    </div>
  );
}

export default App;
