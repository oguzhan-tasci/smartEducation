exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        page_name: "index" // degisken yolluyoruz ve bu sayede hangi link aktifse onu aktifleştiriyoruz
    });
}

exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: "about" // degisken yolluyoruz ve bu sayede hangi link aktifse onu aktifleştiriyoruz
    });
}