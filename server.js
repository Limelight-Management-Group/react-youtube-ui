const express = require('express')
const app = express();

app.use(express.static('src'));
port = 3003
app.listen(port, () =>{
	console.log('Nube tube is rolling on port:' , port)
})