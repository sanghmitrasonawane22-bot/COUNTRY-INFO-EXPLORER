function getCountry() {
    let country = document.getElementById("countryInput").value;

    fetch("https://restcountries.com/v3.1/name/" + country)
    .then(response => response.json())
    .then(data => {
        let c = data[0];

        let output = `
            <div class="card">
                <img src="${c.flags.png}">
                <h2>${c.name.common}</h2>
                <p><b>Capital:</b> ${c.capital}</p>
                <p><b>Population:</b> ${c.population}</p>
                <p><b>Region:</b> ${c.region}</p>
            </div>
        `;

        document.getElementById("result").innerHTML = output;

        // 🌍 Show map with location pin
        let mapURL = "https://www.google.com/maps?q=" + c.name.common + "&output=embed";
        document.getElementById("mapFrame").src = mapURL;
    })
    .catch(() => {
        document.getElementById("result").innerHTML = "<p>Country not found ❌</p>";
    });
}