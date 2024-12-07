express=require('express');
app= express();
router=require('./Routes');
connectDB=require('./connectDB');


const port=process.env.port;
app.use(express.json());
app.use(express.cors());


connectDB(); // connection yto database
app.use('/api/images',router); // routes 

app.listen(port,()=>{
    console.log("server is running on port"+port);
})