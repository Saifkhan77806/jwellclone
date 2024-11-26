const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const jwt = require('jsonwebtoken');
const User = require('./schema/UserSchema')
require('dotenv').config()

passport.serializeUser((user,done)=>{
    done(null, user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: `https://admin.jewellerydekho.in/auth/callback`,
    // passReqToCallback: true 
},
async function(request, accesstoken, refreshtoken, profile, done){
    const userExist = await User.findOne({email: profile.email})
    console.log(userExist)
    if(userExist){ 
    console.log(profile)
    return done(null, {type: profile, logtype: "login", name: profile.given_name})
    }else{

        const userEmail = await User.findOne({email: profile.email})
       
        if(userEmail){
            return done(null, {type: "user already exist", logtype: "user already exist"})
        }
        

        const userData = new User({
            name: profile.given_name,
            email: profile.email,
            profile: profile.picture,
            provider: profile.provider,
            id: profile.id
        })
    
        await userData.save()
        console.log(userData)
        return done(null, {type: userData, logtype: "register"})
    }


}
))

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET_KEY,
    callbackURL: `https://admin.jewellerydekho.in/linkedin/callback`,
    scope: ['openid', 'profile', 'w_member_social', 'email'],
    profileUrl: 'https://api.linkedin.com/v2/me'
  },
  async (accessToken, refreshToken, profile, done) => {
    process.nextTick(async function () {
        const userExist = await User.findOne({id: profile.id})
        console.log(userExist)
        if(userExist){ 
        console.log(profile.givenName)
        return done(null, {type: userExist, logtype: "login", name: profile.givenName})
        }else{
            const userEmail = await User.findOne({email: profile.email})
            if(userEmail){
                console.log("user already exist")
                return done(null, {type: "user already exist", logtype: "user already exist"})
            }

            const userData = new User({
                name: profile.givenName,
                email: profile.email,
                profile: !profile.picture ? "Image not found": profile.picture,
                provider: profile.provider,
                id: profile.id
            })
        
            await userData.save()
            console.log(profile.givenName)
            return done(null, {type: userData, logtype: "register"})
        }
    
    
        });
    }
))
