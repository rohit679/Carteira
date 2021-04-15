const mongoose = require('mongoose');

const URL = 'mongodb://localhost/carteira';

(async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        });
        console.log('Database connected successfully');
    }
    catch(err) {
        console.log('Database connection error');
    }
})();