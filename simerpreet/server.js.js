let express = require("express")
let app = express()
let cors=require("cors")
app.use(express.json())
app.use(cors("*"))

let posts=[]

app.get("/post", (req, res) => {
    
    res.send(200,{posts})
})

app.post("/post", (request, response) => {
    console.log(request.body)
    posts.push(request.body)
    response.send(200)
})

app.listen(5000, () => {
    console.log("server started...")
})