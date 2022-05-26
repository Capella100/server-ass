const express = require('express')

const app = express()

const PORT = 8080

app.get("/", (req, res) => {
    console.log("Home Page");
    res.sendFile("./index.html", {root: __dirname});
})

app.get("/ABOUT", (req, res) => {
    console.log("ABOUT PAGE");
    res.sendFile("./about.html", {root: __dirname});
})

app.get("/CONTACT", (req, res) => {
    console.log("Contact Page");
    res.sendFile("./contact.html", {root: __dirname});
})

app.use((req, res) => {
    res.sendFile("./404.html", {root: __dirname});
})


app.listen(PORT, ()=>{
   console.log(`app is listen to ${PORT}`);
})