const express=require("express");

const app=express();

const PORT=3001;
const users=[
    {
        name:"Rahul",
        kidneys:[{
            healthy:true,
        },{
            unhealthy:true
        }]
    }
]
// kidney game hmlog khelne wale hai.
app.get('/',(req,res)=>{
    let displaykidneys=users[0].kidneys;
    let countkidneys=displaykidneys.length;
    console.log("displaykidneys",displaykidneys);
    console.log("countkidneys",countkidneys);
    let healthykidneys=0,unhealthykidneys=0;
    for(let i=0;i<displaykidneys.length;i++){
        if(displaykidneys[i].healthy==true) healthykidneys++;
        if(displaykidneys[i].unhealthy==true) unhealthykidneys++;
    }
    console.log("healthykidneys",healthykidneys);
    console.log("unhealthykidneys",unhealthykidneys);
    res.json({
        countkidneys,
        healthykidneys,
        unhealthykidneys
    })
})
app.post('/',(req,res)=>{
    let kidneyswehavebeforeadd=users[0].kidneys.length;
    let kidneycountafteraddition=kidneyswehavebeforeadd+1;
    res.json({
        kidneyswehavebeforeadd,
        kidneycountafteraddition
    })

})
app.put('/',(req,res)=>{
    let unhealthykidneys=0;
    let displaykidneys=users[0].kidneys;
    for(let i=0;i<displaykidneys.length;i++){
        if(displaykidneys[i].unhealthy==true) unhealthykidneys++;
    }
    console.log("unhealthy kidneys hai ",unhealthykidneys)
    if(unhealthykidneys==0) res.status(411).json({
        "msg":"bhai unhealthy kidney hai eich ni toh ky hi replace krega"
    })
    res.json({unhealthykidneys})
})

app.delete('/',(req,res)=>{
    let displaykidneys=users[0].kidneys;
    let unhealthykidneys=0;
    for(let i=0;i<displaykidneys.length;i++){
        if(displaykidneys[i].unhealthy==true) unhealthykidneys++;
    }
    if(unhealthykidneys==0) res.status(301).json({
        "msg":"Bhai unhealthy kidney remove kaise krega hai hich ni re"
    })
    else{
        users[0].kidneys.unhealthy=false;
        res.status(201).json({
            "msg":"Kidney is removed Successfully",
            unhealthykidneys
        })
    }
})

app.listen(PORT,()=>{
    console.log(`server is running at https//localhost:${PORT}`)
})