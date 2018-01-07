const jwt = require('jsonwebtoken');
require('dotenv').config();

let isLogin = (req, res, next) => {
    console.log(req.params.id);
    jwt.verify(req.params.id, process.env.RAHASIA, (err, decoded) => {      
        if(err){
            res.status(403).json({
                msg: "Not Auth"
            });
        }
        req.simpanData = decoded;
        next();
    });

}

module.exports = {
    isLogin
}
