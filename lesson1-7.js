console.log("lesson 1-7, get all uti in a juan");
var ksa=require("ksana-simple-api");

var vpos=2000; 
ksa.sibling({db:"cbeta",vpos:vpos},function(err,res){
	console.log("vpos",vpos,"is at ",res.idx, res.sibling[res.idx])
	console.log(res.sibling);
});

//practice, combine whole juan