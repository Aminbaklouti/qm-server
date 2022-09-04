const AuthPolicies = require('./policies/AuthPolicies');
const AuthController = require('./controllers/AuthController');
const DataController = require('./controllers/DataController');
const JWTController = require('./controllers/JWTController');

module.exports = (app) => {
    app.get("/", res.send('hey'));
    app.post("/login", AuthPolicies.login, AuthController.login);

    app.post("/check/JWT", JWTController.checkToken);

    app.post("/get/issues", JWTController.check, DataController.getIssues)
    app.post("/get/subIssues", JWTController.check, DataController.getSubIssues)
    app.post("/get/allSubIssues", JWTController.check, DataController.getAllSubIssues)
    app.post("/get/subjects", JWTController.check, DataController.getSubjects)
    app.post("/get/elements", JWTController.check, DataController.getElements)
    app.post("/get/levels", JWTController.check, DataController.getClasses)
    app.post("/get/details", JWTController.check, DataController.getDetails)
    app.post("/get/reportsByLevel", JWTController.check, DataController.getReportsByLevel)
    app.post("/get/compareByIssue", JWTController.check, DataController.compareByIssue)
    app.post("/get/compareBySubIssue", JWTController.check, DataController.compareBySubIssue)
    app.post("/get/compareByIssueLevels", JWTController.check, DataController.compareByIssueLevels)
    app.post("/get/compareBySubIssueLevels", JWTController.check, DataController.compareBySubIssueLevels)
    
    app.post("/add/detail", JWTController.check, DataController.addDetail)
}