// const bcrypt = require("bcryptjs")
// const Users = require("../../users")

// function restrict() {
//     const authError = {
//         message: "Invalid credentials"
//     }

//     return async (req, res, next) => {
//         try {
//             const {username, password} = req.headers
//             if (!username || !password) {
//                 return res.status(401).json(
//                     {
//                         message: "Invalid credentials A"
//                     }
//                 )
//             }

//             const user = await Users.findBy({username}).first()
//             if (!user) {
//                 return res.status(401).json({
//                     message: "Invalid credentials B"
//                 })
//             }

//             const passwordValid = await bcrypt.compare(password, user.password)
//             if (!passwordValid) {
//                 return res.status(401).json({
//                     message: "Invalid credentials C"
//                 })
//             }

//             if (!req.session || !req.session.user) {
//                 return res.status(401).json({
//                     message: "Invalid credentials D"
//                 })
//             }

//             next()
//         } catch (err) {
//             next(err)
//         }
//     }
// }

// module.exports = restrict

module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        next()
    } else {
        res.status(401).json({message: "You cannot pass!"})
    }
}