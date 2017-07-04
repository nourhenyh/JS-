chaine=prompt("veuillez entrer vorte chaine");

n=chaine.length ;

console.log("votre chaine contient",n,"caractére");

var n= chaine.toLowerCase();

console.log("votre chaine en majus est",n);

var n= chaine.toUpperCase();

console.log("votre chaine en minus est",n);

 nbv : function(char) {
var l=char.length;
var i;
var voy;
for(i=0; i<l;i++)
	{

	if (char[i]==='i'||char[i]==='a'||char[i]==='e')

       {

       	voy++;
       }
   else 

   	  {
   	  	voy=0;
   	  }
   	   	console.log("votre chaine contient ",voy);
}
return (voy)

}
n=chaine.nbv;
console.log(n);