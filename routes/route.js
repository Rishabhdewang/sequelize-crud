const Sequelize = require('sequelize');
const db = require('../config/database');
const model = require('../model/model');
const express = require('express');
const app = express();
const router = express.Router();
const Testdb = require('../model/model')

router.get('/test',(req,res) => {
    model.findAll()
    .then( route => {
        console.log(route);
        // res.sendStatus(200);
        res.send(route);
    })
    .catch(err => console.log(err));
})

router.post('/add', (req,res) => {
    Testdb.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
    })
    .then(route => res.redirect('/test'))
    .catch(err => console.log("error", + err))
})


router.post('/update/:id', (req,res) => {
    Testdb.findAll({
        where : {
          id  : req.params.id
        }})
        .then(update => {
           Testdb.update({
                firstName : req.body.firstName,
                lastName : req.body.lastName
            })
            .then(
            res.send(update))
        });
        
    })

    router.get('/delete/:id', (req,res) => {
        Testdb.destroy({
            where : {
                id: req.params.id}
        })
        .then(route => res.redirect('/test'))
        .catch(err => console.log("error", + err))
    })

module.exports =router;
