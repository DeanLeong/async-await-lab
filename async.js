// Async/Await w/ Try/Catch
// API docs https://restcountries.eu/#api-endpoints-full-name

// Step 1: Fetch Country data

// function fetchData(country) {
//   const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
//   axios.get(url)
//     .then(res => {
//       let data = res.data[0]
//       const appendElement = document.querySelector('#country-data')
//       while (appendElement.lastChild) {
//         appendElement.removeChild(appendElement.lastChild)
//       }
//       showCountryData(data)
//   })  
// }

// Step 2: Rewrite using Try/Catch & Async/Await

// async function fetchData(country) {
//   const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
//   try {
//     let response = await axios.get(url)
//     let data = response.data[0]
//     removeCountry()
//     showCountryData(data)
//   } catch (error) {
//     console.error(error)
//   }
// }

// Step 3: Create dynamic HTML

// function showCountryData(data) {
//   let countryInfo = `
//   <img id="flag" src="${data.flag}" alt="flag" style="width: 400px; height: auto;">
//   <h2 id="country-name">${data.name}</h2>
//   <h5 id="capital">${data.capital}</h5>
//   `
// }

// Step 4: Append Country Data

// function showCountryData(data) {
//   let countryInfo = `
//   <img id="flag" src="${data.flag}" alt="flag" style="width: 400px; height: auto;">
//   <h2 id="country-name">${data.name}</h2>
//   <h5 id="capital">${data.capital}</h5>
//   `
//   document.querySelector('#country-data').insertAdjacentHTML('beforeend', countryInfo )
// }

// Step 5: Dynamically search country using HTML form with eventHandler

// const submit = document.querySelector('#country-form')

// submit.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const inputValue = document.querySelector('#country-search').value
//   fetchData(inputValue)
// })

// Step 6: Remove previous country data

// function removeCountry() {
//   const appendElement = document.querySelector('#country-data')
//   while (appendElement.lastChild) {
//     appendElement.removeChild(appendElement.lastChild)
//   }
// }