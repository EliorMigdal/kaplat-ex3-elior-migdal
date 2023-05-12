const axios = require('axios');
let testNum = 1;

//Phase#3 Test
let testSize1 =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/size?status=ALL',
  headers: { }
};

axios.request(testSize1).then((response) => 
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

let testSize2 =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/size?status=PENDING',
  headers: { }
};

axios.request(testSize2).then((response) => 
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

let testSize3 =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/size?status=DONE',
  headers: { }
};

axios.request(testSize3).then((response) => 
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

let testSize4 =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/size?status=LATE',
  headers: { }
};

axios.request(testSize4).then((response) => 
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

//Testing an invalid status.
let testSize5 =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/size?status=PENDIN',
  headers: { }
};

axios.request(testSize5).then((response) => 
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

//Testing an invalid status.
let testSize6 =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/size?status=',
  headers: { }
};

axios.request(testSize6).then((response) => 
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