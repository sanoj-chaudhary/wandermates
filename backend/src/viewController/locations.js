const { States , City, Locations } = require('./../../models/index');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { check, validationResult } = require('express-validator');

class LocationsView { 
    static async getLocations (req, res, next) {
        try {
            const getlocationData = await Locations.findAll({
                raw : true,
                include: [{model: States, as : 'States',  attributes: ['id', 'name']}, {model: City, as : 'City', attributes: ['id', 'name']}],
                order: [['id', 'DESC']]
            });
        //    res.send(getlocationData)
           res.render('admin/location', {title : 'Location' , data : getlocationData})
        }catch(err) {
            console.log(err);
        }
    }
}

module.exports = LocationsView;