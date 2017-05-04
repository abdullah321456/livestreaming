/**
 * Created by abdullah321 on 5/2/2017.
 */
var express=require("express");
var app=express();
var Crawler = require("crawler");
var c = new Crawler({
    maxConnections : 1,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            c.queue('http://cricfree.sc/cricket-live-streaming-online');

            console.log(res.body);

        }
        done();
    }
});




app.get("/",function(req,res)
{
    res.send("hello world")
})


app.get("/getschedule",function(req,res)
{
    c.queue('http://cricfree.sc/cricket-live-streaming-online');

    res.send("executed")

})



// Queue just one URL, with default callback



app.listen(3000)
console.log('Server running at http://localhost:3000/');
