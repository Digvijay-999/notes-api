const express= require('express');
const app= express();
const PORT= process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send("Welcome to Notes API");
});
app.get("/hello", (req, res) => {
  res.send("Hello XYZ!");
});

app.get("/about", (req, res) => {
  res.json({
    name: "XYZ",
    goal: "Backend Internship"
  });
});

app.get("/notes", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn Express"
    },
    {
      id: 2,
      title: "Build Projects"
    }
  ]);
});

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});