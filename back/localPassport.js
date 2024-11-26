const locatStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('./schema/UserSchema')

const initialiePassport = () =>{
    passport.use(new locatStrategy(async(email, done)=>{
        try{
            const user = await User.findOne({email})
            if(!user) return done(null,false)
    
                return done(null,user)
        }catch(err){
            console.log(err)
                return done(err, false)
        }
    }))

    console.log("check")


    passport.serializeUser((user,done)=>{
        done(null, user)
    })
    
    passport.deserializeUser(function(user,done){
        done(null,user)
    })
}

module.exports = {initialiePassport}