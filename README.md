# application-level-middleware

Using the structure given by ExpressJS “Hello World”, you will have to secure the main page: 

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
  
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```  
The aim of this exercise is to create an application middleware that inspects the query in your URL and if there is a token. 

 

Steps: 

- Create an index.js with the Express application. 
- Create a function secure() that needs to be on every route (app.use()). 
- Inside this secure function, inspect if there is a query with the name token and a value
- If the token has a value, continue (i.e. send the message ‘Hello World!’).
- If the token hasn’t any value or doesn’t exist, respond with a 403.  
