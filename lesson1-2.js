console.log("lesson 1-2, fetch more than one page with query");
var ksa=require("ksana-simple-api");
console.log("q: optional query string");
ksa.fetch({db:"cbeta",uti:["T01.0001.0001a","T01.0001.0001b"],q:"阿含"},function(err,res){
	console.log(JSON.stringify(res));
});