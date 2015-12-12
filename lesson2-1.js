console.log("lesson 2-1, get excerpt");
var ksa=require("ksana-simple-api");

ksa.excerpt({db:"cbeta",q:"海文"},function(err,data){
	console.log("return object same as ksa.fetch")
	console.log(data);
})
