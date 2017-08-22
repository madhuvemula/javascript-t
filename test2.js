var x = ["Banana", "Orange", "Apple", "Mango"];
var y = x.toString();
var m = x.join("  ");
var a = x.push("allpoha");
var b = x.pop();
var l = x.splice(1, 2); 
var c =  10;
var d =  20;
var f = Boolean(c < d);
var g = x.shift();
var h = 9;
var o = 10;
var j = ["shift","bmw","nano","saab"]
var i, len, text;
 for (i = 0, len = j.length, text = ""; i < len; i++) 
{
    text += j[i] + "<br>";
}
var i = ["Banana", "Orange", "Apple", "Mango"];
var len = i.length;
do {
    text += "<br>The fruties is " + i;
    i++;
}
while (i < len);  

console.log(len)
console.log(h == 5 || o == 10);
console.log(y)
console.log(m)
console.log(a)
console.log(b)
console.log(l)
console.log(f)
console.log(g)
console.log(i)
console.log(text)
