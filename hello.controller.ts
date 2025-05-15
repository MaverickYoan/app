import { RestApplication, RestServer } from '@loopback/rest';

const app = new RestApplication();
app.handler(({ request, response }, sequence) => {
    sequence.send(response, 'hello world');
});

(async function start() {
    await app.start();

    const server = await app.getServer(RestServer);
    const port = await server.get('rest.port');
    console.log(`Server is running at http://127.0.0.1:${3000}`);
})();