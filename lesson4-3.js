console.log("lesson 4-3, fetch with breadcrumb");
var ksa=require("ksana-simple-api");

var title="玄奘";
var q="淨土";
var uti=["T13n0411_009@768b","T14n0476_004@576b","T14n0476_005@581a"]
//var uti=["1.1b","1.2a"]
//q="པར";

ksa.fetch({db:"cbeta",q:q,breadcrumb:"mulu",uti:uti},function(err,items){
	console.log(items);
});