let comm = document.getElementById("Community"),
    city = document.getElementById("city"),
    fam = document.getElementById("family");



window.addEventListener("load", ()=>{
    comm.innerText = 0+"+";
    city.innerText = 0+"+";
    fam.innerText = 0+"+";
    let t =0,
        k=0,
        n=1000000;
  let timer1 =  setInterval(()=> {
            t=t+1;
        comm.innerText = t +"+";
      if (t>=50){
            clearInterval(timer1)
        }
    },40);
   let timer2 =  setInterval( ()=> {
        k=k+2;
       city.innerText = k +"+";
        if (k>=100){
            clearInterval(timer2)
        }
    },40);
    let timer3 =  setInterval(()=> {
        n=n+12421;
        fam.innerText = parseInt(n).toLocaleString()+"+";
        if (n>=1700000){
            n = 1700000;
            fam.innerText = parseInt(n).toLocaleString()+"+";
            clearInterval(timer3)
        }
    },40)




});



















