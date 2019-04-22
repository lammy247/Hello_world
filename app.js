const express= require('express')
const app = express()
const port = 3000
app.get('/', (req, res)=>res.send('Mitech on this again seriously determinded to learn'))
app.listen(port, () =>console.log('The webserver is listening on port $[port]!'))