const jwt = require('jsonwebtoken');

module.exports = {
    sign(req,res,user){
        
        var cookie = req.cookies.cookieName;
        if (cookie === undefined) {
            // no: set a new cookie
            var randomNumber=Math.random().toString();
            randomNumber=randomNumber.substring(2,randomNumber.length);
            res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true, sameSite: 'None', secure: true });
            console.log('cookie created successfully');
        } else {
            // yes, cookie was already present 
            console.log('cookie exists', cookie);
        } 

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
            console.log(req.cookies)
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.JWTSECRET, function(err, data){
            if(err){
                console.log(2)
                return res.sendStatus(401)
            }
            return next();
        })
    },
    checkToken(req,res){
        token = req.body.token
        console.log(req.cookies)
        if(!token){
            console.log(3)
            return res.sendStatus(401)
        }
        jwt.verify(token, process.env.JWTSECRET, function(err, data){
            if(err){
                console.log(err)
                console.log(4)
                return res.sendStatus(401)
            }
            return res.send('logged')
        })
    }
}