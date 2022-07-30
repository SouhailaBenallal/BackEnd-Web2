import express from "express";
const port = 3003;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello testing");
});


app.listen(port,() => {
    console.log(`Server listen to port ${port}`)
})
