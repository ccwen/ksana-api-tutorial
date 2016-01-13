console.log("lesson 1-1, fetch a page");

var ksa=require("ksana-simple-api");
console.log("db: name of database");
console.log("uti: unique text identifier");
ksa.fetch({db:"cbeta",uti:"T01n0001_001@1a"},function(err,res){
	console.log("structure of return object")
	console.log(Object.keys(res[0]));
	console.log("text: text of the page");
	console.log("hits: hits in this page in relative offset");
	console.log("vpos: virtual position of this page in whole kdb");
	console.log(res[0]);
});