// Imports
import express from 'express';

const server = express();

let port = 8080;
let host = "localhost";

server.use(express.static('.'));

server.listen(port,host, () => {
    console.info("TBX echo server listening on ", host, ":",  port);
});
