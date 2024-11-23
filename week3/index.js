const express=require("express");
const jwt=require("jsonwebtoken")
const app=express();
const PORT=8000;
const jwtpassword="abcde";

const ALL_USERS=[
    {
        "username":"sassy",
        "password":"123"
    },
    {
        "username":"abhi",
        "password":"123123"
    },
    {
        "username":"alok",
        "password":"321123"
    }
]
function checkUser(username,password){
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username===username && ALL_USERS[i].password===password){
            return true;
        }
    }
    return false;
}
app.use(express.json());

app.get('/',(req,res)=>{
    res.json("first get route!!")
})

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    // check agr same user already present ho toh
    if(checkUser(username,password)){
        res.status(402).json({
            "msg":"User is already created!"
        })
    }
    const token=jwt.sign({username:username},jwtpassword);
    console.log(token);
    res.json({
        "msg":"User Signedin Successfully!!"
    })
})
app.get('/users',(req,res)=>{
    const token=req.headers.authorization;
    if(!token){
        res.status(302).json({
            "msg":"Token is not avaialable!!"
        })
    }
    let decodetoken=jwt.verify(token,jwtpassword);
    console.log(decodetoken)
    let allusers=ALL_USERS.map((user)=>user.username)
    let aname=allusers.filter((item)=>item.startsWith('a'));
    res.json({
        aname
    })

})
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})