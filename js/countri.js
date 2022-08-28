const countriLoad = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
countriLoad();
const displayCountries = counties => {
    const countryContainer = document.getElementById('countires-container');
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
       <h3>Name-${country.name.common}</h3>
       <h3>Capital-${country.capital ? country.capital[0] : 'no capital'}</h3>
       <button onclick="countryLoadDetail('${country.cca2}')">Dataile</button>
       
       
       `;
        countryContainer.appendChild(div);

    });
}
const countryLoadDetail = (Data) => {
    const url = `https://restcountries.com/v3.1/alpha/${Data}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFlag(data[0]));
}
const displayFlag = country => {
    console.log(country)
    const flagContainer = document.getElementById('countries-flag');
    flagContainer.innerHTML = `
      <img src='${country.flags.png}'>

`;


}