// api.openweathermap.org/data/2.5/weather?q=london&appid=706cad06fcc037237dd82a444e6d9682


const APIkey = `706cad06fcc037237dd82a444e6d9682`; // `` = Template String // >>>>>> API taken from the The Open Weather website. //

let search = () => { // Arrow function //
    let cityname = document.querySelector("input").value;
    let data = fetch( // Fetch is called a promise >>>> it will call the link below and if its successful it will call  the .then function and if it fails it will execute another function. //
      `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`
      ) // How to write a Variable in a Template String? >>>>>>>>>> Put it in a ${} //
    
      .then((response) => response.json()) // The .then function gets the result from the Fetch API call //
      .then((data) => {
        let temp = Math.trunc(data.main.temp) - 273;
        let feels_like = Math.trunc(data.main.feels_like) - 273;
        document.getElementById("results").innerHTML = 
        `<p>Temperature ${temp}°C</p> <br/> <p>Feels like${feels_like}°C</p><br/><p>${data.weather[0].description}</p>`;  // ${data.weather[0].description} >>>>>>>> Array //
        console.log(data);
        return data; 
  })
  .catch((err) => console.log(err));  // err = error //
};

// We use a Dollar and curly braces to put a Variable value inside the Template String ${} // 