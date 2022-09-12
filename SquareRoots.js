
var a=prompt("the val of 'a'\n","");
var b=prompt("the val of 'b'\n","");
var c=prompt("the val of 'c'\n","");
var root_part=Math.sqrt(b*b-4.0*a*c);
var denom=2.0*a;
var root1=(-b+root_part)/denom;
var root2=(-b-root_part)/denom;
document.write("the frst root is:",root1,"<br/>");
document.write("the scnd root is:",root2,"<br/>");
