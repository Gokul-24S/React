# React

This code defines a *React component* called Weather that provides a user interface to display current weather information for a specific city. It integrates *OpenWeatherMap API* for fetching real-time weather data and dynamically updates the UI based on user inputs.

# Key Features:
1. *User Input Handling*: Users can search for a city's weather by entering its name in the search bar and pressing "Enter" or clicking the search button. If no city name is entered, an alert prompts the user to provide one.
2. *API Integration*: The component fetches weather data from the OpenWeatherMap API using asynchronous fetch requests. The response is parsed, and relevant weather details like temperature, humidity, and wind speed are extracted.
3. *Dynamic UI Updates*:
   - The current weather is displayed using icons, temperature, location, humidity, and wind speed data.
   - Weather icons are dynamically mapped based on weather conditions using predefined assets (weatherIcons object).
4. *State Management*: 
   - weatherData holds the weather information fetched from the API.
   - city represents the current city for which weather data is displayed.
   - searchTerm captures the user's input in the search bar.
5. *Error Handling*: If an invalid city name is provided or there's an error in the API call, appropriate error messages are displayed via alerts.

# Key Tools and Technologies Used:

1. *React*: 
   - *React Functional Components*: The entire application is structured as a functional component.
   - *React Hooks*:
     - useState: Manages state variables (weatherData, city, and searchTerm).
     - useEffect: Fetches weather data for the default city (London) when the component mounts or whenever the city state changes.
   - *JSX*: Constructs the component's user interface declaratively.
   
2. *API Integration*:
   - *OpenWeatherMap API*: Provides weather details such as temperature, humidity, wind speed, and weather conditions.
   - *Async/Await*: Manages asynchronous API calls for fetching weather data.

3. *CSS Styling*:
   - *Custom CSS*: The layout and styles are defined in the Weather.css file, enhancing the visual appeal of the application.

4. *Static Assets*:
   - Icons (e.g., Clear.png, cloud.png, rain.png) are imported and mapped to different weather conditions for dynamic rendering.

5. *Event Handling*:
   - *Keyboard Events*: The Enter key triggers a weather search.
   - *Click Events*: Clicking the search button initiates the search action.

6. *Error Handling*:
   - Validation for empty input fields.
   - Displays error messages for invalid cities or API issues.

# Application Workflow:

1. *Initial Load*:
   - By default, the weather information for "London" is displayed.
   - The useEffect hook calls the fetchWeather function to retrieve data for the default city.

2. *User Interaction*:
   - Users enter a city name in the search bar.
   - Upon hitting "Enter" or clicking the search button, the city name is updated in the city state, triggering the fetchWeather function.

3. *Data Fetching and Display*:
   - The API response is parsed, and the weather data is stored in the weatherData state.
   - The UI updates to reflect the weather information, including temperature, humidity, wind speed, and an appropriate weather icon.

# Key Highlights:
- *Modern Frontend Development*: Utilizes React hooks and a component-based architecture.
- *Responsive UI Design*: Dynamic updates based on user inputs and real-time API responses.
- *Third-Party API Integration*: Demonstrates the use of an external weather API for real-world data.
- *Reusable Assets*: Icons are mapped efficiently using a dictionary for cleaner and more maintainable code.
