const axios = require('axios');

//Phase#5 Test
let testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=1&status=PENDING',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=1&status=DONE',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=1&status=LATE',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=2&status=DONE',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=2&status=LATE',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=2&status=PENDING',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

//Testing invalid ID and valid status
testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=0&status=LATE',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

//Testing invalid ID and invalid status
testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=-1&status=PENDIN',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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

//Testing valid ID and invalid status
testUpdate =
{
  method: 'put',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=1&status=PENDIN',
  headers: {}
}

axios.request(testUpdate).then((response) => 
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