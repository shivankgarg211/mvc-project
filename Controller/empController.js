const connection = require('../Model/database.js')

/////////////////// GET ///////////////
const userget = async (req, res)=> {
    let sqlquery = "SELECT * FROM EMP";
    await connection.query(sqlquery, function (error , result) {
        if(error){
            console.log(error)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
};

///////////// POST //////////////////
const userpost = async (req, res)=> {
    let data = req.body
    let sqlquery = "INSERT INTO EMP SET?";
    await connection.query(sqlquery, [data], function (error , result) {
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
};

///////////// PATCH //////////////////
const userpatch = async (req, res)=> {
    let id = req.query.id
    let data = req.body
    let sqlquery = "UPDATE EMP SET ? WHERE ID=?";
    await connection.query(sqlquery, [data, id], function (error , result) {
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
};

///////////// DELETE //////////////////
const userdelete = async (req, res)=> {
    let id = req.query.id
    
    let sqlquery = "DELETE FROM EMP WHERE ID=?";
    await connection.query(sqlquery, id, function (error , result) {
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
};

module.exports = {userget,userpost,userpatch,userdelete}