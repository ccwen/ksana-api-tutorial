console.log("lesson 3-2, get table of content");

var ksa=require("ksana-simple-api");
console.log("db: name of database");

ksa.toc({db:"cbeta"},function(err,res){
	var toc=res.toc;
	console.log("table of content");
	console.log("array of treenode object");
	console.log("first treenode",toc[0]," //d:depth, t:caption , n:next same depth, o:internal used")

	console.log("treenode of 阿含部上",toc[2]);
	console.log("treenode of 阿含部下",toc[ toc[2].n] );

	toc.length=10;
	console.log("first 10 treenode",toc);

})