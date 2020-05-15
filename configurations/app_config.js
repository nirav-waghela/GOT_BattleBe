const dbUser = 'nirav'
const dbPassword = 'YDKYqWxbkiR3eGYt'


let config = {
    port:8000,
    database: {
        connect_uri: process.env.dbURL
        //mongodb+srv://nirav:YDKYqWxbkiR3eGYt@cluster0-u0yh0.mongodb.net/test?retryWrites=true&w=majority
        // `mongodb+srv://${dbUser}:${dbPassword}@cluster0-u0yh0.mongodb.net/test?retryWrites=true&w=majority`
    }
};

module.exports = config
//E06IVTc6KtyaKDMw
