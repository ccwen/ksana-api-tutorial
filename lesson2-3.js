/*benchmark */
var ksa=require("ksana-simple-api");
ksa.search({db:"cbeta",q:"菩提"},function(err,db){
	console.log('count',db.rawresult.length);
	console.log(db.engine.timing);
})