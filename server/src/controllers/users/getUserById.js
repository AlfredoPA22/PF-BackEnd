const User = require("../../models/UserModel")


const getUserById=async(id)=>{

    try {
        const user= await User.findById(id)
        console.log(user)
        return user
        
    } catch (error) {
        throw error
    }
}
module.exports=getUserById