const User = require('../../models/UserModel');


const GetUsers=async()=>{
    try {
        const users=await User.find({});
        return users
    } catch (error) {
        throw error
    }
}

module.exports=GetUsers