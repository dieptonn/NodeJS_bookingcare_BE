
let getHomePage = (req,res) => {
    return res.render('homepage')
}

let getAboutPage = (req,res) => {
    return res.render('about')
}


module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,

}
