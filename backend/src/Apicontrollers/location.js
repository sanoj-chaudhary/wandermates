const { States , City, Locations } = require('./../../models/index');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult } = require('express-validator');

class ApiLocations {
    static async getState (req, res, next) {
        try {
            const data = await States.findAll({
                where : {
                    is_active : '1'
                },
                attributes : ['id','name']   
            })
            res.status(200).json({
                status : true,
                messase : 'success',
                data
            })
        }catch (err) {
            console.log(err);
            res.status(500).json({
                status : false,
                error : "Soemthing Went Wrong"
            })
        }
    }


    static async getCities (req, res, next) { 
        try {
            const data = await City.findAll({
                where : {
                    state_id : req.query.state_id,
                    is_active : '1'
                },
                attributes : ['id','name','state_id']
            })
            res.status(200).json({
                status : true,
                messase : 'success',
                data
            })
        }catch (err) {
            console.log(err);
            res.status(500).json({
                status : false,
                error : "Soemthing Went Wrong"
            });
        }
    }


    static async getLocations (req, res, next) {
        try {
            let where = {}
            if (req.query.city_id && req.query.state_id) {
                where.city_id = req.query.city_id;
                where.state_id = req.query.state_id;
            } else if (req.query.city_id) {
                where.city_id = req.query.city_id;
            } else if (req.query.state_id) {
                where.state_id = req.query.state_id;
            }        
            
            if(req.query.name){
                where.name = { [Op.like]: `%${req.query.name}%` };
            }
            const getlocationData = await Locations.findAll({
                raw : true,
                where : where,
                include: [{model: States, as : 'States',  attributes: ['id', 'name']}, {model: City, as : 'City', attributes: ['id', 'name']}],
                order: [['id', 'DESC']]
            });
            res.status(200).json({
                status : true,
                message : 'success',
                data : getlocationData
            })
        }catch (err) {
            console.log(err);
            res.status(500).json({
                status : false,
                error : "Soemthing Went Wrong"
            });
        }
    }
}

module.exports = ApiLocations;