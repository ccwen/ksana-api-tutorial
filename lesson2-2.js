console.log("lesson 2-1, get excerpt");
var ksa=require("ksana-simple-api");
//first batch: T01n0001_001@7c ,T01n0001_004@30a
//second batch T01n0001_008@49a, T01n0001_009@55c
ksa.excerpt({db:"cbeta",q:"菩提",count:2},function(err,data){
	var lastpage=data[data.length-1].uti;
	console.log("first batch",data.map(function(d){return d.uti}));
	console.log("should be   [ 'T01n0001_001@7c' ,'T01n0001_004@30a']");
	console.log("vpos",data.map(function(d){return d.vpos}));

	console.log('\nfetch from last page of first batch',lastpage);

	ksa.excerpt({db:"cbeta",q:"菩提",from:lastpage,count:2},function(err,data){
		console.log("second batch",data.map(function(d){return d.uti}));
		console.log("should be    [ 'T01n0001_008@49a','T01n0001_009@55c']");
		console.log("vpos",data.map(function(d){return d.vpos}));
	});
});

