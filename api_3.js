const loadCountries=(region)=>{
    const url=`https://restcountries.com/v3.1/region/${region}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries=countries=>{
    const countriesContainer=document.getElementById('all-countries');
    countriesContainer.innerText=''
    countries.forEach(country => {
    console.log(country.flags.png)
    const countryDiv=document.createElement('div');
    
    countryDiv.innerHTML=`
    <h3>Country Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
    countriesContainer.appendChild(countryDiv)
    });
}
// const searchCountries=(region)=>{
//     const url=`https://restcountries.com/v3.1/region/${region}`
//     console.log(url)
// }

// loadCountries()


