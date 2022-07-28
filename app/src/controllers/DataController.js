const {Issue} = require('../../models');
const {Subject} = require('../../models');
const {Element} = require('../../models');
const {Level} = require('../../models');
const {Detail} = require('../../models');

module.exports = {
    async getIssues(req,res){
        const DBissues = await Issue.findAll({
            attributes: ["main"],
            group: "main",
            order: ["id"],
            }).catch(err=>{
                res.sendStatus(500)
            });
        const issues = []
        DBissues.forEach(function(issue, i){
            issues.push(issue.main)
        })
        res.json(issues)
    },
    async getSubIssues(req,res){
        if(!req.body.issue){
            res.sendStatus(400)
        }
        const DBsubIssues = await Issue.findAll({
            where: {
                main: req.body.issue
            }
            }).catch(err=>{
                res.sendStatus(500)
            });
        res.json(DBsubIssues)
    },
    async getSubjects(req,res){
        const DBSubjects = await Subject.findAll()
        .catch(err=>{
            res.sendStatus(500)
        });
        const subjects = []
        DBSubjects.forEach(function(item, i){
            subjects.push(item.subject)
        })
        res.json(subjects)
    },
    async getElements(req,res){
        const DBElements = await Element.findAll()
        .catch(err=>{
            res.sendStatus(500)
        });
        const elements = []
        DBElements.forEach(function(item, i){
            elements.push(item.element)
        })
        res.json(elements)
    },
    async getClasses(req,res){
        const DBLevels = await Level.findAll()
        .catch(err=>{
            res.sendStatus(500)
        });
        const levels = []
        DBLevels.forEach(function(item, i){
            levels.push(item.level)
        })
        res.json(levels)
    },
    async getDetails(req,res){
        const details = await Detail.findAll({
            order: [
                ['id', 'DESC'],
            ]
        })
        .catch(err=>{
            res.sendStatus(500)
        });
        res.json(details)
    },
    async addDetail(req, res){
        Detail.create(req.body)
        .then(response=>{
            res.send('stored')
        }).catch(err=>{
            res.status(500)
        })
    }
}