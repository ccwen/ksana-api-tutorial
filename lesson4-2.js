console.log("lesson 4-2, breadcrumb");
var ksa=require("ksana-simple-api");
//given a uti or vpos, return breadcrumb in table-of-content

ksa.breadcrumb({db:"cbeta",uti:"T13.0411.0768b",name:"mulu"},function(err,res){
	console.log("breadcrumb,array of ancestor nodes",res.breadcrumb);
	console.log("node seq",res.nodes);

	console.log("full toc length",res.toc.length);
	console.log("res.breadcrumb[0]==res.toc[res.nodes[0]]");
});