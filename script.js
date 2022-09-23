let circle=["c1","c2","c3","c4","c5"];
let end=0;
function handleclick(id){
    // let end=e.target.value;
    console.log(id);
    end=id;
    change();
}
const main1=document.getElementById("main1");
const main2=document.getElementById("main2");
function handlesubmit(){
    console.log("Handle Submit Invoked");
    document.getElementById("points").innerHTML=end;
    document.getElementById("main1").innerHTML=document.getElementById("main2").innerHTML;

}
function change(){
    for(let i=1;i<=5;i++)
    {
        const select=document.getElementById(circle[i-1]);
        select.style.background="hsl(216, 12%, 8%)";
        select.style.color="hsl(217, 12%, 63%)";

    }
    for(let i=1;i<=end;i++)
    {
        const select=document.getElementById(circle[i-1]);
        select.style.background="rgb(116, 238, 116)";
        select.style.color="black";

    }
}    
