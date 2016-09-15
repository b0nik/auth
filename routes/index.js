const router = api.express.Router();
const controllers=require('../controllers/user');

router.get('/', function(req, res, next) {
    res.render('home', {auth:req.isAuthenticated(), person:req.session.passport, flash:req.flash(), title: 'Express'});
});

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/')
});

router.post('/users',
    api.passport.authenticate('userLocal', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    })
);
router.use('/user',function(req,res,next){
    req.isAuthenticated()?next():res.redirect('/')
});

router.get('/user', function(req,res,next){
    res.end('secure page')
});

module.exports = router;
