let circle=["c1","c2","c3","c4","c5"];
let end;
function handleclick1(){
    console.log("Clicked On Circle 1");
    end=1;
    change();
}
function handleclick2(){
    console.log("Clicked On Circle 2");
    end=2;
    change();
}
function handleclick3(){
    console.log("Clicked On Circle 3");
    end=3
    change();
}
function handleclick4(){
    console.log("Clicked On Circle 4");
    end=4;
    change();
}
function handleclick5(){
    console.log("Clicked On Circle 5");
    end=5;
    change();
}
function handlesubmit(){
    let text="Thank You";
    document.getElementById("submit").innerHTML=text;
    // document.getElementById("rating").innerHTML=end;
    console.log(document.getElementById("rating").innerHTML);
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
