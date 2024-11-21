const express=require("express");
const zod=require("zod");
const app=express();

const schema=zod.array(zod.number());
const PORT=8000;
app.use(express.json())
app.get('/',(req,res)=>{
    console.log("First get route!!");
    res.json({
        "msg":"done!!!"
    })
})
app.post('/checkkidneys',(req,res)=>{
    const kidneys=req.body;
    const kidneyslength=kidneys.length;
    const checkkidneys=schema.safeParse(kidneys)
    console.log(checkkidneys);
    res.json({
        checkkidneys
    })
})

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})