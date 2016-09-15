const LocalStrategy = require('passport-local').Strategy;
const userModel=require('./../models/userModel');

api.passport.serializeUser((user,done)=>{
    done(null, user.username)
});

api.passport.deserializeUser((id,done)=>{
    done(null, {username:id})
});

const local=  function(username, password, done) {
    const user=userModel.findOne({name:username});
    if(user){
        if(username===user.name&&password===user.password){
            return done(null, {username:user.name})
        }
    }
    return done(null,false,{message:'Incorrect login or password'})

};

api.passport.use('userLocal',new LocalStrategy(local));
