import  './asserts/css/index.css';
var jQuery = require("jquery")(window)
function component(){
    var ele = document.createElement('div');
    ele.innerHTML = "hello webpack";
    ele.className = "demo"
    return ele;
}
document.documentElement.appendChild(component());
function determineDate() {
    //import('moment').then(function(moment) {
    //    console.log(moment().format());
    //}).catch(function(err) {
    //    console.log('Failed to load moment', err);
    //});
    require.ensure([],(require)=>{
        var moment = require('moment');
        console.log(moment().format())
    },(err)=>{ console.error("we failed to load chunk:"+err)},"custom-chunk-name1")
}

determineDate();