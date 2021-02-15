const getCountryData = (country) => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      if (country === 'india') {
        data = data[1]
      } else {
        data = data[0]
      }
      console.log(data)
      renderData(data)

      const neighbour = data.borders[0]

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
    })
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      console.log('I WILL INVOKE ALWAYS')
    })
}
getCountryData('india')

function renderData(data) {
  console.log('Country ', data.name)
  console.log('Population ', +(data.population / 10000000).toFixed(1), 'cr')
}
