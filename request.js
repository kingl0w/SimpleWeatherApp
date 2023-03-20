const key = '94543ac9a60242a79c7e32ccb42498c3';

//const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Las Vegas&appid=94543ac9a60242a79c7e32ccb42498c3';

//fetch(baseURL)
    //.then((data)=>{console.log('response', data.json()) })
    //.catch((error)=>{
       /// console.log(error);
  //  });

  const requestCity = async (city) => {
    const baseURL='https://api.openweathermap.org/data/2.5/weather'
    const query = '?q=' + city + '&appid=' + key;

  //make fetch call (promise call)
  const response =  await fetch(baseURL+query);

  //promise data
  const data = await response.json();
  return data;

  }

  