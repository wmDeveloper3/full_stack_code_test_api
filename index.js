const express = require('express');
const app = express();

app.get("/shan", (req, res) => {
    res.send("Hello Shan");
});

app.listen(4000, () => {
    console.log("listening on port 3000");
});