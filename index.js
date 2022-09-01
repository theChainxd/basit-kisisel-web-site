var express = require("express")
var app = express()

let PORT = 80;

app.use(express.static(`${__dirname}/views`));


app.get("/",(req,res)=>{
    res.sendFile(`./${__dirname}/index.html`)
})

app.use((req, res) => {
    req.query.code = 404;
    req.query.message = `Page not found.`;
    res.status(404).redirect("/")
});

app.listen(PORT,console.log("Server is running on port 80"));


module.exports = app;

/* Bu altyapi theChain tarafından yapılmıştır! Eger bir sorun yasar iseniz github profilimden discord profilime ulaşabilirsiniz */
/* Emeğe saygı konusunda altyapıyı kendininiz çalmamanız her türlü daha hoş olur */