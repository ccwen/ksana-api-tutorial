console.log("lesson 3-1, get file/segment");

var ksa=require("ksana-simple-api");
console.log("db: name of database");

ksa.toc({db:"cbeta"},function(err,res){
	console.log("number of files + number of segment",res.toc.length);
	console.log("number of files",res.toc.filter(function(toc){ return toc.d===1}).length);
	res.toc.length=10;
	console.log("first 10 treenode",res.toc);
	console.log("file d==1 , segment d==2 , vpos: starting virtual position of this segment, t:caption");
	console.log("t==_  , unnamed segment");
});
