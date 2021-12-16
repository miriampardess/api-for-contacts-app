
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
    return contactsList;
}
export const getAllcontacts = async () => {
    return contactsList;
}

export const deleteContacts = async (id) => {
    contactsList.splice(id, 1); 
    return contactsList;
}



