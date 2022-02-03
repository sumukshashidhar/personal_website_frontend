module.exports = function(app) {


    app.get("/", async function ( _ , res) {
        res.render("index", {name: process.env.NAME, current_time: Date.now(), server_number: process.env.SERVER_NUMBER})
    })

    return app;
}