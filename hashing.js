var bcrypt = require('bcrypt')

// (1) Generar SALT

var salt = bcrypt.genSaltSync(12)
console.log(`Salt: ${salt}`)

// (2) password original
var password_original = "1234"

// (3) Aplicarle el hash
console.time('hash')
var password_hash = bcrypt.hashSync(password_original,salt)
console.timeEnd('hash')
console.log(`Password hash: ${password_hash}`)

// (4) 
var valido = bcrypt.compareSync("1234",password_hash)
console.log(valido)