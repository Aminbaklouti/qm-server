const jwt = require('jsonwebtoken');

module.exports = {
    sign(req,res,user){
        jwt.sign({user}, process.env.JWTSECRET, {expiresIn: '1d'}, (err,token)=>{
            if(err){
                res.status(400); 
                return
            }
            res.status(202).send(token)

        })
    },
    check(req,res, next){
        token = req.cookies['token']
        if(!token){
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.JWTSECRET, function(err, data){
            if(err){
                return res.sendStatus(401)
            }
            return next();
        })
    },
    checkToken(req,res){
        token = req.body.token
        if(!token){
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.JWTSECRET, function(err, data){
            if(err){
                console.log(err)
                return res.sendStatus(401)
            }
            return res.send('logged')
        })
    }
}