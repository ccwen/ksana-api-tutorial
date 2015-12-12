console.log("lesson 1-6, fetch page by vpos");
var ksa=require("ksana-simple-api");
var vpos=2000;

ksa.fetch({db:"cbeta",vpos:vpos},function(err,res){
	console.log("vpos",vpos," uti=",res[0].uti);
	console.log(res[0]);
});