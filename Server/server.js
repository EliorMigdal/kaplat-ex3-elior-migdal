const express = require('express');
const app = express();
app.use(express.json());

let todosArr = [];
let idCounter = 1;
let arrSize = 0;
let logArrSize = 0;

app.listen(8496, () => {
    console.log('Server is running on port 8496');
  });

//Phase 1
app.get('/todo/health', (req, res) => {
    res.status(200).send("OK");
  });

//Phase 2
app.post('/todo', (req, res) => 
{
    let titleCheck = true;
    let dateCheck = true;
    let currDate = new Date();

    for (let index = 0; index < idCounter - 1; index++)
    {
        if (todosArr[index].title === req.body.title)
        {
            res.status(409).json({ result: '', errorMessage: "Error: TODO with the title [" + JSON.stringify(req.body.title) +  "] already exists in the system" });
            titleCheck = false;
        }
    }

    if (titleCheck && currDate.getTime() > req.body.dueDate)
    {
        res.status(409).json({ result: '', errorMessage: "Error: Can't create new TODO that its due date is in the past" });
        dateCheck = false;
    }

    if (titleCheck && dateCheck)
    {
        const newTODO = 
        {
            id: idCounter,
            title: req.body.title,
            content: req.body.content,
            status: "PENDING",
            dueDate: req.body.dueDate
        }

        todosArr.push(newTODO);
        res.status(200).json({ result: idCounter, errorMessage: "" });
        idCounter++;
        arrSize++;
        logArrSize++;
    }
});

//Phase 3
app.get('/todo/size', (req, res) => {
    let status = req.query.status;
    let checkStatus = true;

    if (status != "ALL" && status != "PENDING" && status != "LATE" && status != "DONE")
    {
        res.status(400).json({ result: '', errorMessage: "Bad Request" });
        checkStatus = false;
    }
    
    else if (checkStatus && status === "ALL")
    {
        res.status(200).json({result: idCounter - 1, errorMessage: ""});
    }

    else
    {
        let resCounter = 0;
        for (let index = 0; index < arrSize; index++)
        {
            if (todosArr[index].status === status)
            {
                resCounter = resCounter + 1;
            }
        }

        res.status(200).json({result: resCounter, errorMessage: ""});
    }
  });

  //Phase 4
  app.get('/todo/content', (req, res) =>
  {
    let status = req.query.status;
    let sortBy = req.query.sortBy;
    let checkStatus = true;
    let checkSort = true;

    if (status != "ALL" && status != "PENDING" && status != "LATE" & status != "DONE")
    {
        checkStatus = false;
        res.status(400).json({ result: '', errorMessage: "Bad Request" });
    }

    else if (checkStatus && (sortBy && (sortBy != "ID" && sortBy != "DUE_DATE" && sortBy != "TITLE") ) )
    {
        checkSort = false;
        res.status(400).json({ result: '', errorMessage: "Bad Request" });
    }

    else if (checkStatus && checkStatus)
    {
        let resArr = [];
        for (let index = 0; index < arrSize; index++)
        {
            if (status == "ALL" || todosArr[index].status === status)
            {
                resArr.push(todosArr[index]);
            }
        }

        if (!sortBy || sortBy === "ID")
        {
            resArr.sort((a, b) => a.id - b.id);
        }

        else if (sortBy === "DUE_DATE")
        {
            resArr.sort((a, b) => a.dueDate - b.dueDate);
        }

        else
        {
            resArr.sort((a, b) => a.title.localeCompare(b.title));
        }

        res.status(200).json({result: resArr, errorMessage:""});
    }
  });

  //Phase 5
  app.put('/todo', (req, res) =>
  {
    let param_id = req.query.id;
    let param_status = req.query.status;
    let checkID = true;
    let checkStatus = true;
    let foundID = false;

    for (let index = 0; index < arrSize && !foundID; index++)
    {
        if (todosArr[index].id == param_id)
        {
            foundID = true;
        }
    }

    if (!foundID)
    {
        checkID = false;
        res.status(404).json({result:"",errorMessage:`Error: no such TODO with id ${param_id}`});
    }

    else if (checkID && param_status != "PENDING" && param_status != "LATE" && param_status != "DONE")
    {
        checkStatus = false;
        res.status(400).json({result:"",errorMessage:"Bad Request"});
    }

    else if (checkID && checkStatus)
    {
        let oldStatus = todosArr[param_id - 1].status;
        todosArr[param_id - 1].status = param_status;
        res.json({result:oldStatus, errorMessage:""});
    }
  });

  //Phase 6
  app.delete('/todo', (req, res) =>
  {
    let param_id = req.query.id;
    let checkID = true;
    let foundID = false;

    for (let index = 0; index < arrSize && !foundID; index++)
    {
        if (todosArr[index].id == param_id)
        {
            foundID = true;
        }
    }

    if (!foundID)
    {
        checkID = false;
        res.status(404).json({result:"",errorMessage:`Error: no such TODO with id ${param_id}`});
    }

    else if (checkID)
    {
        todosArr[param_id - 1] = {};
        logArrSize--;
        res.status(200).json({result:logArrSize,errorMessage:""});
    }
  });