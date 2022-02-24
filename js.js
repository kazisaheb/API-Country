let show = document.getElementById('show')
//Create single item
createItem = (data) => {
  let div = document.createElement('div')
  let imgSrc = ''
  div.innerHTML = `
    <h3> Country: ${data.name.common}</h3>
    <h4>Capital: ${data.capital}</h4>
    <p>Region: ${data.region}</p>
    <p>Area: ${data.area} SQR.KM</p>
    <p>Population: ${data.population}</p>
    <p>Currencies: ${data.currencies}</p>
    <img src="${data.flags.svg}" alt="">
    <button class="hide">Hide Avobe</button>
   `
  show.append(div)
}

// All countries data
allCountries = () => {
  show.innerHTML = ''
  fetch('https://restcountries.com/v3.1/all')
    .then(get => get.json())
    .then(got => {
      got.forEach(data => {
        createItem(data)
      })
    })
}
// region
let btns = document.getElementsByTagName('button')
for (btn of btns) {
  btn.addEventListener('click', function (e) {
    show.innerHTML = ''
    console.log(e.target.innerText);
    fetch(`https://restcountries.com/v3.1/region/${e.target.innerText}`)
      .then(res => res.json())
      .then(data => {
        // createItem(data)
        // createItem(data)
        console.log(data);
      })

  })
}
// Hide parents...
document.addEventListener('click', function (event) {
  if (event.target.className == 'hide') {
    // console.dir(event.target.parentNode);
    // event.target.parentNode.removeChild(event.target.parentNode.children[4])
    event.target.previousElementSibling.remove()
  }
})