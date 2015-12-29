console.log("lesson 4-4, filter by range");
var ksa=require("ksana-simple-api");
//given a uti or vpos, return breadcrumb in table-of-content
//,q:"菩提"
var db="cbeta";
var sid=["26"]
ksa.getFieldRange({db:db,field:"sutra",values:sid},function(err,ranges){
	console.log(ranges)
	ksa.filter({db:db,q:"多聞聖弟子",ranges:ranges},function(err,res){
		console.log(res.map(function(item){return item.uti}).join(" "))
	});
});