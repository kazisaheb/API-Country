let show = document.getElementById('show')

//Create single item
const createItem = (res) => {
  res.forEach(data => {
    let div = document.createElement("div");

    const currencyObject = data.currencies;
    const key = Object.keys(currencyObject)[0];

    div.innerHTML = `
     <h3> Country: ${data.name.common}</h3>
     <h4>Capital: ${data.capital}</h4>
     <p>Region: ${data.region}</p>
     <p>Area: ${data.area} SQR.KM</p>
     <p>Population: ${data.population}</p>
     <p>Currencies: ${key}</p>
     <img src="${data.flags.svg}" alt="">
     <button class="hide">Hide Avobe</button>
    `;

    show.append(div)
  })
}
// All countries data
allCountries = () => {
  show.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      createItem(data)
    })
}
// region
let btns = document.getElementsByTagName('button')
for (tbtn of btns) {
  tbtn.addEventListener('click', function (e) {
    show.innerHTML = ''
    fetch(`https://restcountries.com/v3.1/region/${e.target.innerText}`)
      .then(res => res.json())
      .then(data => {
        createItem(data)
      })
  })
}
// Hide parents...
document.addEventListener('click', function (e) {
  if (e.target.className == 'hide') {
    e.target.previousElementSibling.remove()
  }
})