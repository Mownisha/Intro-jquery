function firstLast(sen)
{
    var x=sen.charAt(0);
    var y=sen.length;
    b=y-1;
    var z=sen.charAt(b);
    var a=x+z;
    alert("The concatinated  string is "+a);
    var c=a.toUpperCase();
    alert("The uppercase value "+c);
    return c;
};

function rev(c)
{
  var a=c.charAt(1);
  var b=c.charAt(0);
  var g=a+b;
  alert("The reversed string is "+g);
  return g;
};

function call1(sen)
{
  var c=firstLast(sen);
  var d=rev(c);
  var r=sen+d;
  alert("The concatinated value is "+r);
  var f=center(sen,d);
  var g=reverse(f);
  return g;
};

function center(sen,g)
{
  var a=sen.length;
  var b=a/2;
  var e=parseInt(b);
  var c=sen.charAt(e);
  var d=c+sen+g;
  alert("d is "+d);
  return d;
};

function reverse(r)
{
  var sp=sen.split("");
  var re=sp.reverse();
  var jo=re.join("");
  alert("The resultant reversed string is "+jo);
};

var sen=prompt("Enter a sentence:");
alert(sen);
var r=call1(sen);
