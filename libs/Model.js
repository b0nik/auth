const Model = {
        init(path){
           this.cache= JSON.parse(api.fs.readFileSync(path,"utf8"));
        },
        findOne(obj){
            if(!obj){
                throw new Error('must be search identifier')
            }

            let result;
            this.cache.forEach(item=>{
                for(let key in item){
                    for(let k in obj){
                        if(key===k&&item[key]===obj[k]){
                            result= item
                        }
                    }
                }
            });
            return result
        }
    };

    module.exports=Model;