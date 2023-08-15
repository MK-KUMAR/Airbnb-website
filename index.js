function showcontent(){
    const show=document.getElementById("show");
    const btn=document.getElementById("but");
    const less=document.getElementById("less");
    if(show.style.display=="none"){
        show.style.display="flex";
        less.style.display="block";
        btn.style.display="none";
    }else{
        show.style.display="none";
        less.style.display="none";
        btn.style.display="block";
    }
}