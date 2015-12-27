console.log("lesson 1-3, render hits");
var ksa=require("ksana-simple-api");

ksa.fetch({db:"cbeta",uti:"1a1",q:"阿含"},function(err,res){
	var out=ksa.renderHits(res[0].text,res[0].hits,function(obj,text){
		//this is for React.js , convert to HTML
		return obj.className?'<span class="'+obj.className+'">'+text+"</span>":text;
	}).join("");

	console.log(out);
});