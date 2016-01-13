console.log("lesson 1-2, fetch more than one page with query");
var ksa=require("ksana-simple-api");

console.log("uti: use array of string to hold more than one uti");
var uti=["T01n0001_001@1a","T01n0001_001@1b"];
console.log("q: optional query string");
var q="阿含";

ksa.fetch({db:"cbeta",uti:uti,q:q},function(err,res){
	console.log(JSON.stringify(res));
});