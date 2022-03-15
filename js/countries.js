const loadCountries= ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}

const displayCountry = contries=>{
    console.log(contries);
    const allCountriesHTML = contries.map(country =>getCountry(country));
    const container = document.getElementById('country');
    container.innerHTML = allCountriesHTML.join(' ');
}

const getCountry = ({name, flags, area}) =>{
    return `
    
<div class="cnt">
    <h3>
        ${name.common}
    </h3>
    <h3>
        area: ${area}
    </h3>
    <img src="${flags.png}" alt="">
</div>
    
    `
}

// option 1
// const getCountry = country =>{
//     const {name, flags} = country;
//     return `
    
// <div>
//     <h3>
//         ${name.common}
//     </h3>
//     <img src="${flags.png}" alt="">
// </div>
    
//     `
// }

// original
// const getCountry = country =>{
//     return `
    
// <div>
//     <h3>
//         ${country.name.common}
//     </h3>
//     <img src="${country.flags.png}" alt="">
// </div>
    
//     `
// }

loadCountries()