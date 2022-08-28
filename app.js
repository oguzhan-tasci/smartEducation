const express = require("express");

const app = express();

app.set("view engine", "ejs");

// Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).render('index',{
        page_name : "index"  // degisken yolluyoruz ve bu sayede hangi link aktifse onu aktifleştiriyoruz
    });
})

app.get('/about',(req,res) => {
    res.status(200).render('about',{
        page_name : "about" // degisken yolluyoruz ve bu sayede hangi link aktifse onu aktifleştiriyoruz
    });
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}..`);
}) 