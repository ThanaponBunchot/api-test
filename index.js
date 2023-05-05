// import supabase from "./config/supabase.js";
import express from "express";
import cors from "cors";

import * as useNews from  "./src/controller/news.js"

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",useNews.fetchData);
app.post("/filterCategory", useNews.filterCategory);
app.post("/filterViews", useNews.filerViews);

app.listen(5000, () => {
  console.log("Server start on port 5000");
});
