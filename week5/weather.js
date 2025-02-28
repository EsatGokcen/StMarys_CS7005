/* 
- Create a new JavaScript file named weather.js in this week's sub-directory of your project.
- Define an async function called getWeather(city) that:
- Simulates fetching weather data using setTimeout().
- If the city is "London", it should resolve with { temperature: 20, condition: "Sunny" }.
- If any other city is entered, it should reject with "City not found".
- Use try...catch to handle errors and log the result.
- Extend the function by adding displayWeather(weatherData), which logs The weather in {city} 
is {temperature}°C and {condition}..
- Call getWeather("London") and getWeather("Paris") and handle both success and error cases.
- Test your implementation and verify it functions as expected.
- Commit and push the changes to your GitHub repository.
*/

async function getWeather(city) {
    try {
        let data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (city === 'London') {
                    resolve({ temperature: 20, condition: 'Sunny' });
                } else {
                    reject('City not found');
                }
                }
           });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
