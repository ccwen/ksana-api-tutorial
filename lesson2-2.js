console.log("lesson 2-1, get excerpt");
var ksa=require("ksana-simple-api");
//first batch: T01.0001.0007b ,T01.0001.0029c
//second batch T01.0001.0048c, T01.0001.0055b
ksa.excerpt({db:"cbeta",q:"菩提",count:2},function(err,data){
	console.log("first batch",data.map(function(d){return d.uti}));
	var lastpage=data[data.length-1].uti;
	console.log('last page of first batch',lastpage);

	ksa.excerpt({db:"cbeta",q:"菩提",from:lastpage,count:2},function(err,data){
		console.log("second batch",data.map(function(d){return d.uti}));
	});
});

