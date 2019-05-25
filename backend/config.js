/*
Guarda la configuració, com el Port i la URL de la base de dades
 */
module.exports={
    port: process.env.PORT || 3001,
    db: process.env.MONGODB ||  'mongodb://localhost:27017/Minim1',
    //SECRET_TOKEN: 'miclavedetokens'
}
