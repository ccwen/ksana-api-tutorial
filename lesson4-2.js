console.log("lesson 4-2, breadcrumb");
var ksa=require("ksana-simple-api");
//given a uti or vpos, return breadcrumb in table-of-content
//,q:"菩提"
ksa.toc({db:"cbeta",vpos:126000,name:"mulu"},function(err,res){
	//console.log(res.toc)
	console.log("breadcrumb,array of ancestor nodes\n",res.breadcrumb.map(function(r){return JSON.stringify(r)}).join("\n"));
	console.log("node seq",res.nodeseq);

	console.log("full toc length",res.toc.length);
	console.log("res.breadcrumb[0]==res.toc[res.nodeseq[0]]");
});