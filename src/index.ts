import * as http2 from "http";
import app from "./server"
const PORT = process.env.PORT || 8080;
let server = http2.createServer({}, app);
server.listen(PORT, () => {
    console.log(`Running on ${PORT} ⚡`)
});
