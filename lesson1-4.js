console.log("lesson 1-4, multiple keywords");
var ksa=require("ksana-simple-api");

ksa.fetch({db:"cbeta",uti:"0@1a",q:"阿含 誦"},function(err,res){
	var out=ksa.renderHits(res[0].text,res[0].hits,function(obj,text){
		return obj.className?'<span class="'+obj.className+'">'+text+"</span>":text;
	}).join("");
	console.log("first keyword hl0 , second keyword hl1 , and so on")
	console.log(out);
});