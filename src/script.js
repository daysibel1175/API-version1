const express = require('express');

const app = express();

app.get( '/status', (req, res) => {
    res.send('Hello')
});

const port = process.env.PORT || 2030;

app.listen( port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
})

//mongoose connection

// mongoose.connect(process.env.KEY_URI)
// .then(()=> console.log("Conectado a MongoBD Atlas!"))
// .catch((error) => console.error(error))
