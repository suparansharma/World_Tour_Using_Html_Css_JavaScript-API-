fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');



    //     // const h3 = document.createElement('h3');
    //     // h3.innerText = country.name;

    //     // const p = document.createElement('p');
    //     // p.innerText = country.capital;

    //     // countryDiv.appendChild(h3);
    //     // countryDiv.appendChild(p);
    //     // countriesDiv.appendChild(countryDiv);

    //     countryDiv.className = 'country';

    //     const countryInfo = 
    //     `
    //     <h3 class="country-name">${country.name}</h3>
    //     <p>${country.capital}</p>
        
    //     `

    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);

        
    // }



    // using foreach function

    countries.forEach(country => {


        const countryDiv = document.createElement('div');

        countryDiv.className = 'country';

        const countryInfo = 
        `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">Details</button>
        
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
        
    });
}

const displayCountryDetail = name =>{

    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
    .then(res=>res.json())
    .then(data => renderCountryInfo(data[0]));

    

    console.log(url);
}


const renderCountryInfo = country=>{

    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML= `
      <h1>${country.name}</h1>
      <p>${country.population}</p>
      <p>${country.area}</p>
      <img src="${country.flag}">
    `
}