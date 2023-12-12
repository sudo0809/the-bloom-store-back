const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' });

const execute = async () => {
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log('DB connection successfull');
        const User = require('../models/user');
        const userList = await User.find({email: { $not : { $eq: 'sugatdhole@gmail.com'}}});

        const all_fake_user_ids = userList.map((user) => {return user['_id']})
        console.log("Total unimportant user: ", all_fake_user_ids.length)

        await User.deleteMany({ _id: {$in: all_fake_user_ids}}).then((res) =>{
            console.log(res);
        }).catch(err => {
            console.log(err)
        })

        mongoose.connection.close()
    }
    catch (err) {
        console.log('mongoose could not connect')
        console.log(err);
    }
}

execute();