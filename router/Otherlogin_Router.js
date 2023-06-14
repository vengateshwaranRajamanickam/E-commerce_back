import express from 'express'
import passport from 'passport'

export const OtherLogin=express.Router();

  OtherLogin.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });

  OtherLogin.get("/login/success/google", (req, res) => {
    const userInfo={
      id:req.user.id,
      displayname:req.user.displayName,
      provider:req.user.provider,
      userEmail:req.user.emailid,
      picture:req.user.picture
    }
    res.send(userInfo)
  });
  

OtherLogin.get('/google',newFunction())

OtherLogin.get('/google/callback',
passport.authenticate("google",{
successRedirect: `https://stack-backend-agld.onrender.com/auth/login/success/google`,
failureRedirect:'/login/failed'
}))

OtherLogin.get("/login/success/github", (req, res) => {
  const userInfo={
    id:req.session.passport.user.id,
    displayName:req.session.passport.user.displayName,
    provider:req.session.passport.user.provider,
    picture:req.session.passport.user.photos[0].value
  }
  res.send(userInfo)
});

OtherLogin.get("/github", passport.authenticate("github"));

OtherLogin.get( "/github/callback",
  passport.authenticate("github", {
    successRedirect: `https://stack-backend-agld.onrender.com/auth/login/success/github`,
    failureRedirect: "/login/failed",
  })
);

OtherLogin.get("/login/success/facebook", (req, res) => {
  const userInfo={
    id:req.session.passport.user.id,
    displayName:req.session.passport.user.username,
    provider:req.session.passport.user.provider,
    userEmail:req.session.passport.user.emailid,
    picture:req.session.passport.user.avatar_url
  }
  res.send(userInfo)
});

OtherLogin.get("/facebook", passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['user_friends', 'manage_pages'] }));

OtherLogin.get("/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: `https://stack-backend-agld.onrender.com/auth/login/success/facebook`,
    failureRedirect: "/login/failed",
  }) 
);

OtherLogin.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
})

function newFunction() {
  return passport.authenticate("google", { scope: ["profile", "email"] });
}
 