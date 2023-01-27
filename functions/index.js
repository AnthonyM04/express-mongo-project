import functions  from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllDoc, getStuff}  from "../src/functions.js"



//app use
const app = express()
app.use( express.json())
app.use( cors() )

//app: get
app.get('/get', getAllDoc)

//app: post
app.post('/gimme',getStuff)

// gcp
export const api = functions.https.onRequest( app )

