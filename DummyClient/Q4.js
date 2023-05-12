const axios = require('axios');

//Phase#4 Test
let testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=ALL&sortBy=',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=PENDING&sortBy=',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=DONE&sortBy=',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=LATE&sortBy=',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=ALL&sortBy=ID',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=ALL&sortBy=DUE_DATE',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=ALL&sortBy=TITLE',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=PENDING&sortBy=ID',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=PENDING&sortBy=DUE_DATE',
  headers: { }
};

axios.request(testContent).then((response) => 
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

testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=PENDING&sortBy=TITLE',
  headers: { }
};

axios.request(testContent).then((response) => 
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

//Test with invalid status and valid soryBy
testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=AL&sortBy=TITLE',
  headers: { }
};

axios.request(testContent).then((response) => 
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

//Test with invalid status and valid soryBy
testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=&sortBy=TITLE',
  headers: { }
};

axios.request(testContent).then((response) => 
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

//Test with invalid status and valid soryBy
testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=&sortBy=',
  headers: { }
};

axios.request(testContent).then((response) => 
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

//Test with valid status and invalid soryBy
testContent =
{
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8496/todo/content?status=ALL&sortBy=DUE',
  headers: { }
};

axios.request(testContent).then((response) => 
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