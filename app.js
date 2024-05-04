app.get("/start", function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send(JSON.stringify("Pepe"));
});