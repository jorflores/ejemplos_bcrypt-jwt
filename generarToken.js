const jsonwebtoken = require('jsonwebtoken');
const SECRET = process.env.SECRET || "secret1234"

// 1 - payload   2 - secret
jsonwebtoken.sign({EsAdmin:true,userid:1}, SECRET, {expiresIn:'1h'}, (err,token) => {

if (err){
    console.log(err)
}
else {
    console.log(token)
}
}) 
