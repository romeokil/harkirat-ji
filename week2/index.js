const express=require("express");

const app=express();

const PORT=3001;

app.get('/',(req,res)=>{
    res.send('<h1>hello baby</h1>')
})

app.listen(PORT,()=>{
    console.log(`server is running at https//localhost:${PORT}`)
})