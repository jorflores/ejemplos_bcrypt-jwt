const jsonwebtoken = require('jsonwebtoken');
const SECRET = process.env.SECRET || "secret1234"


var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFc0FkbWluIjp0cnVlLCJ1c2VyaWQiOjEsImlhdCI6MTYzNzI2NjAzOCwiZXhwIjoxNjM3MjY5NjM4fQ.9AXNFxNfAFIfwSOofoxM4vJskFH4p_gKyZp67Gs9rFY"


jsonwebtoken.verify(token,SECRET, (err,data) => {
    if (err){
        console.log(err)
    }
    else {
        console.log('all good')
        console.log(data.EsAdmin)
        console.log(data.userid)
    }
})