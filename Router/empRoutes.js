const express = require('express')
const EmpRouter = express.Router();

EmpRouter.use(express.json());

const {
    userget, userpost, userpatch, userdelete
} = require('../Controller/empController.js')

EmpRouter.get("/view",userget)
EmpRouter.post("/post",userpost)
EmpRouter.patch("/update",userpatch)
EmpRouter.delete("/delete",userdelete)

module.exports = EmpRouter