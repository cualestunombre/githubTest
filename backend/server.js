const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./db");

app.use(bodyParser.json());


app.get("/api/values",(req,res,next)=>{
    db.pool.query("select * from lists;",
        (err,results,fields) => {
            
            if (err)
                return res.status(500).send(err);
            else
                return res.json(results)
        }
    );
});

app.post("/api/value",(req,res,next)=>{
    db.pool.query(`insert into lists (value) values('${req.body.value}');`,
        (err,results,fields) => {
            console.log(err);
            if (err)
                return res.status(500).send(err);
            else
                return res.json({success: true, value: req.body.value});
        }
    );
});

PORT = 5000
app.listen(PORT,()=>{
    console.log(`${PORT} 포트 서버 가동`);
});

