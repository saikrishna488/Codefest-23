const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


let userD, model

let midItems, items

let skillSch, skillItems
const dbOn = () => {
    main().catch(err => console.log(err));

    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
    }


    userD = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    });

    model = mongoose.model('users', userD);

    midItems = new mongoose.Schema({
        name: String,
        img1: String,
        img2: String,
        link: String
    });

    items = mongoose.model('items', midItems);

    skillSch = new mongoose.Schema({
        img: String,
        name: String,
        link: String
    });

    skillItems = mongoose.model('skillItems', skillSch);
}

const push = async (data) => {
    let d = model(data)
    await d.save();
}

const push2 = async (data) => {
    let d = items(data)
    await d.save();
}

const push3 = async (data) => {
    let d = skillItems(data)
    await d.save();
}

let find1 = async () => {
    let data1 = await items.find({})
    for (let i = 0; i < data1.length; i++) {
        // console.log(data1[i].name + " "+ data1[i].password)
    }
    return (data1)
}

let find2 = async () => {
    let data1 = await skillItems.find({})
    for (let i = 0; i < data1.length; i++) {
        // console.log(data1[i].name + " "+ data1[i].password)
    }
    return (data1)
}


let findd = async (name, pass) => {
    let data1 = await model.find({ name: name, password: pass })
    return (data1)
}

let auth = async (name, pass) => {

    let d = await model.exists({ name: name, password: pass })
    return d
}
// dbOn()
// let data = [
//     {
//         img: "Aws",
//         name: "http://127.0.0.1:5600/images/aws.jpg",
//         link: "http://127.0.0.1:5600/skills/aws"
//     },
// ]
// push3(data)
module.exports = { push, dbOn,findd, auth,find1 }