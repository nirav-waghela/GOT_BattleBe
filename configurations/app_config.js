const dbUser = 'nirav'
const dbPassword = 'pEOw5P9aaU6d8gTo'


let config = {
    port:8000,
    database: {
        connect_uri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-u0yh0.mongodb.net/got_battle?retryWrites=true&w=majority`
        //mongodb+srv://nirav:YDKYqWxbkiR3eGYt@cluster0-u0yh0.mongodb.net/test?retryWrites=true&w=majority
        // `mongodb+srv://${dbUser}:${dbPassword}@cluster0-u0yh0.mongodb.net/test?retryWrites=true&w=majority`
    }
};

module.exports = config
//E06IVTc6KtyaKDMw
