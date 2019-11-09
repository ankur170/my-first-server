const express=require('express')
const app=express()
function uzzu (req,res)
{
res.send('<h1> my name is ankur yadav</h1>');
}
app.get('/',uzzu)
app.listen(3333,()=>console.log('server started'))