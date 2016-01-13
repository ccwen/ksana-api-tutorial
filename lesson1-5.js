console.log("lesson 1-5, fetch next/prev page");
var ksa=require("ksana-simple-api");

ksa.next({db:"cbeta",uti:"T01n0001_001@1a",count:2},function(err,res){
	console.log("fetch next 2 pages from T01-1a");
	console.log(res);

	ksa.prev({db:"cbeta",uti:"T01n0001_001@2a",count:2},function(err,res2){
		console.log("fetch prev 2 pages from T01-2a");
		console.log(res);
		if(res[0].text==res2[0].text) {
			console.log("same")
		} else {
			console.log("ERROR")
		}
	});

});

