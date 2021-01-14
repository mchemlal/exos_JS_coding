//const requestCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_API_KEY}&units=metric`;
// Clé API pour les Prévisions
const Weather_API_KEY = "d82abebd2244e7d5f664ca183a16f006";

// URI de la requête pour retrouver un IP
const IP_request = "http://ip-api.com/json/";
// avec le premier appel API, on peut récupérer le nom de la ville, la latitude et la longitude

// géolocalisation par IP
fetch(IP_request)
    .then(res => {
        // on parse la réponse reçu (res) au format json
        return res.json();
    })
    .then(json => {
        // on affecte la réponse au format json à une variable
        let data = json;
        const city = data.city;
        const lat = data.lat;
        const lon = data.lon;
        const requestGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_KEY}&units=metric`;

        fetch(requestGeo)
            .then(res => res.json())
            .then(forecast => {
                // destructure forecast pour extraire main
                let { main } = forecast;
                let temp = main.temp;
                console.log(forecast);
                let villeActuelle = main.city;

                let { description, icon } = forecast.weather[0];

                let { speed } = forecast.wind;


                // météo des jours suivants

                // on code l'appli

                let temperature = document.getElementById("temperature");
                let text = (Math.ceil(temp * 2) / 2) + " C°";
                temperature.textContent = text; // formule pour arrondir au demi superieur

                let ville = document.getElementById("ville");
                ville.textContent = city;

                let descr = document.getElementById("description");
                descr.textContent = description;

                let iconWeather = document.getElementById("icon")
                iconWeather.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);

                let windSpeed = document.getElementById("vitesseVent");
                windSpeed.textContent = Math.round(speed);

            });
    });