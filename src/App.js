import {useState} from "react";


function App() {

  const [data, setData] = useState({});
  const [city, setCity] = useState('');

  const key = '726c142202df0003c3e1861212821985';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

  const searchWeather = (e)=>{
      if(e.key === "Enter") {
          fetch(url)
              .then(res=>res.json())
              .then(res=>{
              setData(res)})
          setCity('')
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
        {data.name !== "undefined" && (
            <div className="footer">
                <div className="feels">
                    {data.main && (
                        <p className="bold">
                            {`${data.main.feels_like.toFixed()} `}
                            °C
                        </p>
                    ) }
                    <p>Відчувається як</p>
                </div>
                <div className="humidity">
                    {data.main && (
                        <p className="bold">
                            {`${data.main.humidity} `}
                            %
                        </p>
                    )}
                    <p>Вологість</p>
                </div>
                <div className="wind">
                    {data.wind && (
                        <p className="bold">
                            {`${data.wind.speed.toFixed(1)} `}
                            м/с
                        </p>
                    )}
                    <p>Швидкість вітру</p>
                </div>

            </div>
        )}
    </div>
  );
}

export default App;
