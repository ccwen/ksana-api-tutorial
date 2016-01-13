console.log("lesson 3-3, get table of content with hits");

var ksa=require("ksana-simple-api");
console.log("db: name of database");

ksa.toc({db:"cbeta",name:"mulu",q:"佛"},function(err,res){
	var toc=res.toc;
	console.log("table of content");

	//calculate node hit of top 15 items
	for (var i=0;i<15;i++){
		ksa.treenodehits(toc, res.hits, i);
	};

	toc.length=15;
	toc.forEach(function(item){
		console.log("level",item.d," ",item.t,"has",item.hit,"hits");
	})
})