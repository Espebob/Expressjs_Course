const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message:'Hello from your Express server!'});
  });

  app.post('/add', (req, res) =>{
    var name = req.body.name;
    var email = req.body.email;
    res.json({message: `Thank you ${name} for signing up. Your email is ${email}.`})
})
app.listen(3000,()=>{ //listening on port 3000
    console.log('server running on port 3000') //server running on port 3000
})