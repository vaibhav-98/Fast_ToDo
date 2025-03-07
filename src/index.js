const fastify = require('fastify')({
    logger:true
}) // root application instence 

fastify.addHook('onReady', function listen(done) {
    console.log("Server is ready to take request");
    done()
    
})

fastify.addHook('onReady', function listen() {
    console.log("Server is stopping");
   // done()
    
})

const PORT = 8080;
async function start() {
    try {
        await fastify.listen({port: PORT})
        console.log(`Server is up on PORT: $ ${PORT}`);
        fastify.close()
    } catch (error) {
        console.log(error);
        
    }
}

start()


