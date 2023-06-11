import db from '../models/index';

let gethomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });
        
    } catch (e) {
        console.log(e);
    } 
}
let home = async (req, res) => {
    return res.render("HomePage/ejs/trangchu")
}

module.exports = {
    gethomepage: gethomepage,
    home: home,
}