module.exports = (req,res,next) => {
    if(req.method === 'POST' && req.path === '/login'){
        if(req.body.username === 'admin' && req.body.password === '123456'){
            return res.status(200).json({
                user:{
                    token:'123123231'
                }
            })
        }else{
            return res.status(400).json({msg:'用户名或密码错误'})
        }
    }
    next()
}