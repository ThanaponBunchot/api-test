import supabase from "./config/supabase.js";


export const fetchData = async (req, res) => {
  let { data, error } = await supabase.from("news").select("*");
  return res
    .status(200)
    .json({ status: "success", count: data.length, result: data });
}

export const filerViews = async (req, res) => {
  const view = req.body.greaterThan;
  let { data, error } = await supabase
    .from("news")
    .select("title,content,imag_url,views")
    .gt("views", view);
  return res
    .status(200)
    .json({ status: "success", count: data.length, result: data.sort((a,b)=>b.views - a.views) });
}

export const filterCategory = async (req, res) => {
  const category = req.body.category;
  let { data, error } = await supabase
    .from("news")
    .select("title,content,imag_url,views")
    .textSearch("category", category);
  return res
    .status(200)
    .json({ status: "success", count: data.length, result: data });
}