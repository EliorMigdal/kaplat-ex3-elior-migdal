const axios = require('axios');

//Phase#1 Test
let testGet =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/health',
  headers: { }
};

axios.request(testGet).then((response) => 
{
  console.log(JSON.stringify(response.data));
})
.catch(error => 
{
  //Handle error response
  if (error.response && error.response.data) 
  {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } 
  else 
  {
    console.error(error.message);
  }
});