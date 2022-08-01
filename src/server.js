const express = require("express"); 
const app = express(); 

// Adding the public folder to the web server, accessible through /static 
app.use("/static", express.static("public")); 

app.listen(5001, () => {
    console.log("Listening to port 5001");
}); 