const axios = require('axios');

//Phase#2 Test
const currentDate = new Date();
const futureDate = new Date();
const pastDate = new Date();

futureDate.setDate(currentDate.getDate() + 3);
pastDate.setDate(currentDate.getDate() - 3);
let futureTimestamp = futureDate.getTime();
let pastTimeStamp = pastDate.getTime();
let testNum = 1;

console.log(`Test#${testNum}: Expected result: ${testNum++}`);
let postData1 =
{
  "title": "Test#1",
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

axios.request(testPost1).then((response) => 
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

futureDate.setDate(currentDate.getDate() + 5);
futureTimestamp = futureDate.getTime();

console.log(`Test#${testNum}: Expected result: ${testNum++}`);
let postData2 =
{
  "title": "Test#3",
  "content": "Test#3",
  "dueDate": futureTimestamp
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

axios.request(testPost2).then((response) => 
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

futureDate.setDate(currentDate.getDate() + 11);
futureTimestamp = futureDate.getTime();

console.log(`Test#${testNum}: Expected result: ${testNum++}`);
let postData3 =
{
  "title": "Test#2",
  "content": "Test#2",
  "dueDate": futureTimestamp
};

let testPost3 =
{
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : postData3
};

axios.request(testPost3).then((response) => 
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

//Trying post a TODO with the same title.
console.log(`Test#${testNum++}: Expected result: Same Title Error`);
let postData4 =
{
  "title": "Test#1",
  "content": "Test#1",
  "dueDate": futureTimestamp
};

let testPost4 =
{
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : postData4
};

axios.request(testPost4).then((response) => 
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

//Trying post a TODO with a past date.
console.log(`Test#${testNum}: Expected result: Past Date Error`);
let postData5 =
{
  "title": "Test#4",
  "content": "Test#4",
  "dueDate": pastTimeStamp
};

let testPost5 =
{
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : postData5
};

axios.request(testPost5).then((response) => 
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