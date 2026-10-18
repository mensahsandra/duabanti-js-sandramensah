// Convesions for Cedis to Dollars, Kilometres to Miles and Celsius to Fahrenheit.

// 1. From Cedis to Dollars
// Exchange rate source: from Google via Morningstar, today's date: 10/18/2026
//// 1 GHS ≈ 0.0856 USD (1 USD ≈ 11.68 GHS)

function cedisToDollars(cedis) {
    const exchangeRate = 0.0856;
    return cedis * exchangeRate;
}

// 2. From Kilometers to Miles
// Conversion Factor: 1 kilometer = 0.621371 miles

function kilometersToMiles(kilometers) {
    const conversionFactor = 0.621371;
    return kilometers * conversionFactor;
}

// 3. From Celsius to Fahrenheit
// Conversion Formula: (°C × 9/5) + 32 = °F

function celsiusToFarienheit(celsius) {
    return (celsius * 9/5) + 32;
}

const currencyCedis = 2000;
const distanceKilometers = 20;
const temperatureCelsius = 100;

console.log(`A gifted ${currencyCedis} GHS cedis is ${cedisToDollars(currencyCedis).toFixed(2)} USD dollars.`);
console.log(`The distance of ${distanceKilometers} kilometers is about ${kilometersToMiles(distanceKilometers).toFixed(2)} miles.`);
console.log(`The temperature of ${temperatureCelsius}°C is ${celsiusToFarienheit(temperatureCelsius).toFixed(2)}°F.`);