# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Async Await - Country Lab

<img src="https://media.giphy.com/media/4lQnwnB9hVXlm/giphy.gif" height='200px' />

## Directions

1. Fetch Country data
1. Rewrite using Try/Catch & Async/Await
1. Create dynamic HTML
1. Append Country data
1. Dynamically search country using HTML form
1. Remove previous country data

## Overview of key words

- `async`
- `await`
- `try/catch`

```js
try {
  // request
} catch(err) {
  console.log(err);
}
```

# Async/Await Country Lab

> Welcome, Developer! Today we are testing a new Country API.

## Step 1: Fetch Country data

```javascript
function fetchData(country) {
// Get country data
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  // Write the rest of the code here.
}
```
## Step 2: Rewrite function using Try/Catch & Async/Await

```javascript
// Convert this starter code
function fetchData(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  // Write the rest of the code here.
}
```

## Step 3: Show Country Data

Show the country data.

```javascript
function showCountryData(data) {
  // ???
}
```

## Step 4: Append Country Data

Append the country data using the previously written function.

```javascript
function showCountryData(data) {
  // Add more code from Step 3
}
```
## Step 5: Dynamically search country using HTML form with eventHandler

Display country data using the provided search bar.

## Step 6: Remove previous country data

```javascript
function removeCountry() {
 // write code here
}
```

## Resources

- [Async Await](https://javascript.info/async-await)
- [Try...Catch MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
