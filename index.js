const express=require('express');
const app=express()//object stored in variable

//console.dir(app) to see object properties

let port=3000;
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
});


//to know that some one has sent request or not .(searching our site)
/*app.use((req,res)=>{
    console.log("request received!")
    res.send({
         "name":"apple",
         "color":"red",
   })
}); */

app.get('/apple',(req,res)=>{
    res.send("you cantacted apple page");
})

/*app.get("*",(req,res)=>{
    res.send("this is universal path that works when specific path not exits");
})*/

app.get("/:username/:123",(req,res)=>{
    let {username}=req.params;
    res.send(`you are on ${username} page`)
});

app.get('/search',(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("no such query")
    }
    res.send(`you are on ${q} query`)
});