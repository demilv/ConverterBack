const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const cors = require("cors")
const {connect} = require("./src/utils/database")

const app = express()
const PORT = process.env.PORT || 5000
connect()
app.use(cors())
app.use(express.json())

const routerConverter = require("./src/api/routes/converter.routes")

app.use("/converterObtain", routerConverter)

app.listen(PORT, ()=>{
    console.log(`Server URL: http://localhost:${PORT}`)
})