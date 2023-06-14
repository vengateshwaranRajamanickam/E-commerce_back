import passport from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth2'; 
import {Strategy as GitHubStrategy} from 'passport-github'; 
import {Strategy as FacebookStrategy} from 'passport-facebook';
import dotenv from 'dotenv'
dotenv.config()
import Otherlogin from '../Models/Otherlogin.js'

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `https://stack-backend-agld.onrender.com/auth/google/callback` 
  },
  async function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    const check=await Otherlogin.find({googleAccountId:profile.id})
    if(check==""){
      const user=new Otherlogin({
      displayname:profile.displayName,
      googleAccountId:profile.id, 
      userEmail:profile.email
      })
      console.log(user)
      await user.save()
      return done(null,profile)
    }
    else{
      return done(null,profile)
    }
  }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `https://stack-backend-agld.onrender.com/auth/github/callback`
  },
  async function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    const check=await Otherlogin.find({githubAccountId:profile.id})
    if(check==""){
      const user=new Otherlogin({
      displayname:profile.username,
      githubAccountId:profile.id, 
      userEmail:profile.emailid
      })
      console.log(user)
      await user.save()
      return done(null,profile)
    }
    else{
      return done(null,profile)
    }
  }
));

passport.use(new FacebookStrategy({ 
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `https://stack-backend-agld.onrender.com/auth/facebook/callback`,
    profileFields:['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    return done(null,profile)
  }
)); 

passport.serializeUser((user, done) => {
    done(null,user)
})
passport.deserializeUser((user, done) => {
    done(null,user)
}) 
