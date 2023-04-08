const joi = require('@hapi/joi');

const registerSchema = joi.object({
	firstname:joi.string().required(),
	lastname:joi.string().required(),
	email:joi.string().required(),
    mobile:joi.string().required(),
	password:joi.string().required().min(6)
})

const loginSchema = joi.object({
	email:joi.string().required(),
	password:joi.string().required().min(4)
})


module.exports = {registerSchema,loginSchema}