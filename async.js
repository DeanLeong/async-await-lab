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
  try {
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    const response = await axios.get(url)
    // console.log(response.data[0])
    const data = response.data[0]
    console.log(data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

fetchData("Spain")
// Step 3: Create dynamic HTML

function showCountryData(data) {
  // ???
}

// Step 4: Append Country Data

function showCountryData(data) {
  // Add more code from Step 3
}

// Step 5: Dynamically search country using HTML form with eventHandler

// Write eventHandler here

// Step 6: Remove previous country data

function removeCountry() {
  // write code here
  // Make sure to call this function???
}
