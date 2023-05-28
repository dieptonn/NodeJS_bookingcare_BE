import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('-------------------------------');
        console.log(data);
        console.log('--------------------------------');
        return res.render('homepage', {
            data: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
};

let getAboutPage = (req, res) => {
    return res.render('about');
};

let getCRUD = (req, res) => {
    return res.render('crud');
};

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud');
};

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log('-------------------------------');
    // console.log(data);
    // console.log('--------------------------------');

    return res.render('displayCRUD', {
        dataTable: data,
    });
};

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInforById(userId);
        // console.log('-------------------------------');
        // console.log(userData);
        // console.log('--------------------------------');
        return res.render('editCRUD', {
            userData: userData,
        });
    } else {
        return res.send('user not found');
    }
    // return res.render('editCRUD')
};

let putCRUD = async (req, res) => {
    let data = req.body;
    await CRUDService.updateUserData(data);

    // return res.send('updated');
    return res.redirect('/get-crud');
};

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        await CRUDService.deleteUserById(userId);
        return res.redirect('/get-crud');
    } else {
        return res.send('cannot delete user');
    }
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
};
