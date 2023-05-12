const axios = require('axios');

//Phase#6 Test
let testDelete = 
{
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=1',
  headers: {}
}

axios.request(testDelete).then((response) => 
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

//Test deleting the same ID again
testDelete = 
{
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=1',
  headers: {}
}

axios.request(testDelete).then((response) => 
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

//Test deleting an invalid ID
testDelete = 
{
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=0',
  headers: {}
}

axios.request(testDelete).then((response) => 
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