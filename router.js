import { Router as expressRouter } from 'express';
export const router = expressRouter();
import { putContacts,addcontact, getAllcontacts, deleteContacts } from "./contacts.js";

var contats = [];

//Get
router.get('/getAllcontacts', async (req, res) => {

    let contacts = await getAllcontacts();
    res.send(contacts);
});

//Post
router.post('/addContact', async (req, res) => {
    try {
        let object = req.body;
        contats = await addcontact(object);
        // console.log("post contats", contats);
        res.status(200).send(contats);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//Delet  
router.delete('/deleteContacts', async (req, res) => {
    debugger
    // console.log("Delet");
    try {
        let id = req.body.index;
        // console.log("id",id);
        contats = await deleteContacts(id);
        res.status(200).send(contats);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
//Put  Message
router.put('/putContacts', async (req, res) => {
    // console.log("put");
    debugger
    // try {
        let object = req.body;
        // console.log("object",object);

        // object.key = req.params.key;
        contats = await putContacts(object);
        res.status(200).send(contats);
    // }
    // catch (err) {
    //     res.status(500).send(err.message);
    // }
});


