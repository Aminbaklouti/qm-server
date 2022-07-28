const AuthPolicies = require('./policies/AuthPolicies');
const AuthController = require('./controllers/AuthController');
const DataController = require('./controllers/DataController');
const JWTController = require('./controllers/JWTController');

module.exports = (app) => {
    app.post("/login", AuthPolicies.login, AuthController.login);

    app.post("/check/JWT", JWTController.checkToken);

    app.post("/get/issues", JWTController.check, DataController.getIssues)
    app.post("/get/subIssues", JWTController.check, DataController.getSubIssues)
    app.post("/get/subjects", JWTController.check, DataController.getSubjects)
    app.post("/get/elements", JWTController.check, DataController.getElements)
    app.post("/get/levels", JWTController.check, DataController.getClasses)
    app.post("/get/details", JWTController.check, DataController.getDetails)
    
    app.post("/add/detail", JWTController.check, DataController.addDetail)
}