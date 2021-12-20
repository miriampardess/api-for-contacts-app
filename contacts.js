
let img1 = 'https://randomuser.me/api/portraits/men/1.jpg';
let img2 = 'https://randomuser.me/api/portraits/men/2.jpg';
let img3 = 'https://randomuser.me/api/portraits/men/3.jpg';

let contactsList = [
    {},
    { id: 1, "img": img1, "name": "Dan Smith", "phone": "(123) 745-526657" },
    { id: 2, "img": img2, "name": "Alex Alvarez", "phone": "(123) 542-5634271" },
    { id: 3, "img": img3, "name": "Norman Dirtic", "phone": "(724) 124-88573" },
];

export const addcontact = async (object) => {
    contactsList.push({ "id": object.id, "img": object.img, "name": object.name, "phone": object.phone });
    // console.log("addcontactt", contactsList);
    return contactsList;
}
export const getAllcontacts = async () => {
    // console.log("getAllcontacts",contactsList);
    return contactsList;
}

export const deleteContacts = async (id) => {
    debugger
    contactsList.splice(id, 1);
    // console.log("deleteContacts", contactsList);

    return contactsList;
}
export const putContacts = async (object) => {
    let path = object.data.newContact;
    let id = object.idsend.id

     contactsList[id].img = path.img;
    contactsList[id].name = path.name
    contactsList[id].phone = path.phone;
    if (path.title)
        contactsList[id].title = path.title;
    // console.log("newContact", newContact);
    // contactsList.splice(id, 1);
    // console.log("deleteputContacts", contactsList);

    // contactsList.push({ "id": id, "img": path.img, "name": path.name, "phone": path.phone });
    // console.log("putContacts", contactsList);
    return contactsList;

    // contactsList[path.id].img = path.img;
    // contactsList[path.id].name = path.name
    // contactsList[path.id].phone = path.phone;
    // if (contactsList[path.id].title)
    //     contactsList[path.id].title = path.title;
    // console.log("newContact", newContact);

    // return newContact;
}



