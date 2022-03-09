require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose')

let conectionUrl; 
async function connect (){
    try{
        if(process.env.NODE_ENV == 'production'){
            conectionUrl= process.env.DB_URI_PROD ;
            await mongoose.connect(conectionUrl,{
                // keepAlive:true,
                // useNewUrlParser:true,
                // useUnifiedTopology:true,
            })
        }else{
            conectionUrl=  process.env.DB_URI_DEV ;
            await mongoose.connect(conectionUrl,{
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true,
            })
        }
        console.log(`\x1b[55m Entorno == ${process.env.NODE_ENV} \x1b[50m`);
        console.log(`\x1b[36m La conexión a ${conectionUrl} se realizo correctamente \x1b[37m`);
        let port = process.env.PORT;

        app.listen(port, () => {
            console.log(`\x1b[35m Server started on port ${port}  \x1b[37m`);
        })
    }catch(err){
        console.log(`\x1b[31m Error al conectar a la base de datos ${conectionUrl} \x1b[37m`, err);
    }
}


connect();
