

let gethomepage = (req, res) => {
    return res.send("hello nguyen van dung");
}

module.exports = {
    gethomepage: gethomepage,
}