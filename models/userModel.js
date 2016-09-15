const Model=require('./../libs/Model');
const user=Object.create(Model);
user.init(`${__dirname}/model.json`);

module.exports=user;
