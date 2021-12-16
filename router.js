import { Router as expressRouter } from 'express';
export const router = expressRouter();
import { addcontact, getAllcontacts, deleteContacts } from "./contacts.js";

var contats = [];

//Post
router.post('/addContact', async (req, res) => {
    try {
        let object = req.body;
        contats = await addcontact(object);
        res.status(200).send(contats);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//Delet  
router.delete('/deleteContacts', async (req, res) => {
    try {
        let id = req.body.index;
        contats = await deleteContacts(id);
        res.status(200).send(contats);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//Get
router.get('/getAllcontacts', async (req, res) => {
    let contacts = await getAllcontacts();
    res.send(contacts);
});
