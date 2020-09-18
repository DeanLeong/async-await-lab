// Async/Await w/ Try/Catch
// API docs https://restcountries.eu/#api-endpoints-full-name

// Step 1: Fetch Country data using .then()

// function fetchData(country) {
// // Get country data
//   const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
//   // Write code here.
//   axios.get(url)
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((error) => {
//       console.log(`Error: ${error}`)
//     }) 
// }

// fetchData("Spain")

// Step 2: Rewrite Step 1 using Try/Catch & Async/Await
// Be sure to comment out your Step 1 function before writing the new function

async function fetchData(country) {
  removeCountry()
  try {
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    const response = await axios.get(url)
    // console.log(response.data[0])
    const data = response.data[0]
    // console.log(data.capital)
    showCountryData(data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// Step 3: Create dynamic HTML

// function showCountryData(data) {
//   let countryInfo = `
//     <img id="flag" src="${data.flag}" alt="flag" style="width: 400px; height: auto;" >
//     <h2 id="country-name">${data.name}</h2>
//     <h5 id="capital">${data.capital}</h5>
//   `
//   return countryInfo
// }

// Step 4: Append Country Data

function showCountryData(data) {
  let countryInfo = `
  <img id="flag" src="${data.flag}" alt="flag" style="width: 400px; height: auto;" >
  <h2 id="country-name">${data.name}</h2>
  <h5 id="capital">${data.capital}</h5>
`
document.querySelector('#country-data').insertAdjacentHTML('beforeend', countryInfo)
return countryInfo
}

// Step 5: Dynamically search country using HTML form with eventHandler
const form = document.querySelector('#country-form')
// console.log(form)
// Write eventHandler here
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#country-search').value 
  // console.log(inputValue)
  document.querySelector('#country-search').value = ""
  fetchData(inputValue)
})
// Step 6: Remove previous country data

function removeCountry() {
  // write code here
  const appendElement = document.querySelector('#country-data')
  while(appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}
