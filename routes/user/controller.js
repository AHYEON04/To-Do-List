const { User}  = require("../../models");
const jwt = require("jsonwebtoken");
const user = require("../../models/user");

const register = async (req, res) => {
    const{ name, userId, password} = req.body;
    try{
     await User.create({
           name,
           userId,
           password,
       });

       res.status(200).json({
           message : "성공"
       });
    }catch(e){
        res.status(409).json({
           massage : "중복된 유저 아이디",
           error: e.message
        });  
    }
};


const login = async (req, res) => {
    const { userId, password } = req.body;
    const secretkey = req.app.get("jwt-secret");
    console.log(userId, password, secretkey);
    try {
        const user = await User.findOne({
             where: {
                 userId,
                },
            });
            if(user.password === password) {
                const accessToken =  jwt.sign(
                {
                   id : user.id,
                    userId : user.userId,
                    name: user.name,
                }, secretkey,
                {
                    expiresIn: "1h", 
                }
            );
            res.status(200).json({
                message: "로그인 성공",
                accessToken,
            });
        } else {
            res.status(403).json({
                message: "로그인 실패", 
            });
        }
     } catch(e) {
         res.status(404).json({
             message: "존재하지 않는 유저",
         });
     }
};

module.exports = {
    register, 
    login,
}