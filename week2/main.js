const express=require("express");
const zod=require("zod");
const schema=zod.object({
    username:zod.string().email(),
    password:zod.string().min(8)
})
const app=express();
app.use(express.json())

const PORT=8001;

app.get('/',(req,res)=>{
    console.log("First get route!!")
    res.json({
        "msg":"done!!"
    })
})

app.post('/authenticate',(req,res)=>{
    const obj={
        username:req.body.username,
        password:req.body.password
    }
    const check=schema.safeParse(obj);
    res.json({
        check
    })
})
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})