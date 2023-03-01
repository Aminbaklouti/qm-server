const bcrypt = require('bcrypt');
const {User} = require('../../models');
const JWTController = require('../controllers/JWTController');

module.exports = {
    async login(req,res){
        const passwordHash = bcrypt.hashSync(req.body.password, 10);
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if(!user){
            res.status(400).send('Email Not Found')
            return
        }
        if(bcrypt.compareSync(req.body.password, user.password)){
            const JWTuser = {
                id: user.id,
                email: user.email,
                role: user.role
            }
            res.status(202).send('test')
            JWTController.sign(req,res,JWTuser)
        }else{
            res.status(400).send('Wrong password')
        }
    },
    logged(req, res){
        res.send('logged')
    }
}