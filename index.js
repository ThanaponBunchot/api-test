import supabase from "./config/supabase.js";
import express from "express";
import cors from "cors"


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', async(req, res) => {
  
let { data, error } = await supabase
.from('news')
.select('*')
  return res.status(200).json({status:"success",count:data.length,result:data})

})


app.post("/filterCategory",async(req,res)=>{
  let { data, error } = await supabase
.from('news')
.select('title')
.textSearch('category','รถยนต์')
return res.status(200).json({status:"success",count:data.length,result:data})

})


app.listen(5000, () => {
  console.log("Server start on port 5000");
});
