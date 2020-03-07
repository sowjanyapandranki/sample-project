//function loadjson(file,callback){
//var xhr = new XMLHttpRequest();
//xhr.overrideMimeType("application/json");
//xhr.open("GET",file,true);
//xhr.onreadystatechange=function(){
//if(xhr.readyState===4 && xhr.status===200){
//callback(xhr.responseText);
//}
//};
//xhr.send(null);
//}
//loadjson("first.json",function(text){
//var data=JSON.parse(text);
//console.log(data);
//basics(data.details);
 //})
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}else{
				reject(new Error("error"));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
})
var ch=document.querySelector(".child1");
function basics(det){
var img=document.createElement("img");
	img.src="Tulips.jpg";
	img.alt="picture";
	ch.appendChild(img);

	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);

	var email=document.createElement("a");
	email.href="mailto:pandrankisowjanya@gmail.com";
	email.textContent="pandrankisowjanya@gmail.com";
	ch.appendChild(email);

	var number=document.createElement("h3");
	number.textContent="6238523760";
	ch.appendChild(number);

	var address=document.createElement("h4");
	address.textContent="visakhapatnam";
	ch.appendChild(address);
}
var ch2=document.querySelector("child2");
function careerinfo(infodata){
	var h1=document.createElement("h2");
	h1.textContent=infodata.info;
	ch.appendChild(h1);
	var hr=document.createElement("hr");
	ch2.appendChild(hr);
	var h2=document.createElement("h2");
	h2.textContent=infodata.info;
	ch2.appendChild(h2);

}
function educationaldetails(edu){
	var table1=document.createElement("table");
	<h2.appendChild(table1);
	tabledata="";
	for(i=0;i<edu[i].length;i++){
		tabledata+="<tr><td>+edu[i].institute"</td><td>+edu[i].Degree+"</td><td>"+edu[i].percentage+"</td><td>+edu[i].Passoutyear+"<td></tr>";
	}
	table1.innerHTML
}