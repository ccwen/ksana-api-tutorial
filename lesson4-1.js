console.log("lesson 4-1, dual filter");
var ksa=require("ksana-simple-api");

var title="玄奘";
var q="淨土";
//title="རབ"
//q="ཅན"

ksa.filter({db:"cbeta",q:q,regex:title,field:"mulu"},function(err,items){
	//console.log(items.map(function(item){return item.uti}));
	console.log(items)
});