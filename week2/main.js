const express=require("express");

const app=express();

const PORT=8000;
app.use(express.json())
function usercheck(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    console.log("username",username);
    console.log("password ",password);
    if(username!="rahul" || password!="pass"){
        res.json({
            "msg":"Username or password is wrong"
        })
    }
    next();
}
function kidneycheck(req,res,next){
    const kidneyid=req.query.kidneyid;
    console.log("kidneyid ",kidneyid)
    if((kidneyid!=1 && kidneyid!=2)){
        res.json({
            "msg":"Kidneyid is not appropriate!!!"
        })
    }
    next();
}
app.get('/',usercheck,kidneycheck,(req,res)=>{
    console.log("First get route!!");
    res.json({
        "msg":"done!!!"
    })
})

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})