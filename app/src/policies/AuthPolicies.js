const Joi = require('joi');

module.exports = {
    login(req,res,next){
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(4).required()
        })

        const {error} = schema.validate(req.body)

        if(error){
            // add switch case for each field
            res.status(400).send("You must provide a valid " + error.details[0].context.key)
        }else{
            next()
        }
    }
}