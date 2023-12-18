async function getTemperatureHumidity() {
    try {
      let response = await fetch(
        'https://x5xqf9mze5.execute-api.us-east-2.amazonaws.com/default/client_side_functionality',
      );
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

export default getTemperatureHumidity;