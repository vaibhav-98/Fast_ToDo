const fastify = require('fastify')({
    logger:true
}) // root application instence 

// fastify.addHook('onReady', function listen(done) {
//     console.log("Server is ready to take request");
//     done()
    
// })

// fastify.addHook('onReady', function listen() {
//     console.log("Server is stopping");
//    // done()
    
// })

/* ## First method to add route  */

fastify.get('/ping', () => {
   //fastify.log.info(`incomming ping ping ping ...`);
   return "pong"
})

/* ## Second  method to add route  */

fastify.route({
    url: '/hello',
    method: "GET",
    handler: function () {
        console.log(fastify)
        return "world"
    }
})

function samplePlugin(fastify,options , done) {
    console.log("execution my plugin");
    fastify.decorate('key', 'value')
    console.log(fastify);

    done()
}

fastify.register(samplePlugin, {})

const PORT = 8080;
async function start() {
    try {
        await fastify.listen({port: PORT})
        console.log(`Server is up on PORT: $ ${PORT}`);
       // fastify.close()
    } catch (error) {
        console.log(error);
        
    }
}

start()


