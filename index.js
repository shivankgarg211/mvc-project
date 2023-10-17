const express = require("express")

const app = express();
app.use(express.json())

const EmpRouter = require('./Router/empRoutes')
app.use("/api", EmpRouter);

const port = 8000;
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})