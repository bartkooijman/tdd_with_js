const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/advice", (req, res) => {
  const advice = {
    message: "Always remember to test your code!",
    author: "GitHub Copilot",
  };
  res.json(advice);
});

app
  .route("/data")
  .get((req, res) => {
    // Handle GET request
    res.send("This is a GET request");
  })
  .post((req, res) => {
    // Handle POST request
    const data = req.body;
    res.send(`This is a POST request with data: ${JSON.stringify(data)}`);
  });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
