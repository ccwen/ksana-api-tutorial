console.log("lesson 1-5, fetch next/prev page");
var ksa=require("ksana-simple-api");

ksa.next({db:"cbeta",uti:"1a1",count:2},function(err,res){
	console.log("fetch next 2 pages from T01.0001.0001a");
	console.log(res);
});

ksa.prev({db:"cbeta",uti:"2a1",count:2},function(err,res){
	console.log("fetch prev 2 pages from T01.0001.0002a");
	console.log(res);
});