const axios = require('axios');

//Phase#1 Test
let testGet =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/health',
  headers: { }
};

axios.request(testGet)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch(error => {
  // Handle error response
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } else {
    console.error(error.message);
  }
});

//Phase#2 Test
const currentDate = new Date();
const futureDate = new Date();
const pastDate = new Date();
futureDate.setDate(currentDate.getDate() + 3); // Add 3 days to current date
pastDate.setDate(currentDate.getDate() - 3);
const futureTimestamp = futureDate.getTime();
const pastTimeStamp = pastDate.getTime();

let postData1 =
{
  "title": "Test#4",
  "content": "Test#1",
  "dueDate": futureTimestamp
};

let testPost1 =
{
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : postData1
};

axios.request(testPost1)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch(error => {
  // Handle error response
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } else {
    console.error(error.message);
  }
});

futureDate.setDate(currentDate.getDate() + 5);
const newFutureTimeStamp = futureDate.getTime();

let postData2 =
{
  "title": "Test#3",
  "content": "Test#2",
  "dueDate": newFutureTimeStamp
};

let testPost2 =
{
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : postData2
};

axios.request(testPost2)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch(error => {
  // Handle error response
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } else {
    console.error(error.message);
  }
});

//Phase#3 Test
let testSize =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/size?status=DONE',
  headers: { }
};

axios.request(testSize)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch(error => {
  // Handle error response
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } else {
    console.error(error.message);
  }
});

//Phase#4 Test
let testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=PENDING&sortBy=',
  headers: { }
};

axios.request(testContent)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch(error => {
  // Handle error response
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } else {
    console.error(error.message);
  }
});

//Phase#5 Test
let testUpdate =
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
.catch(error => {
  // Handle error response
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } else {
    console.error(error.message);
  }
});

//Phase#6 Test
let testDelete = 
{
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo?id=2',
  headers: {}
}

axios.request(testDelete).then((response) =>
{
  console.log(JSON.stringify(response.data));
})
.catch(error => {
  // Handle error response
  if (error.response && error.response.data) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
  } else {
    console.error(error.message);
  }
});