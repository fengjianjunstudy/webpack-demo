import  './asserts/css/index.css';
import 'moment';
var jQuery = require("jquery")(window)
function component(){
    var ele = document.createElement('div');
    ele.innerHTML = "hello webpack";
    ele.className = "demo"
    return ele;
}
document.documentElement.appendChild(component());
console.log(jQuery,'hha')