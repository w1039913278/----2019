var box = document.getElementsByClassName('plant_box')[0];
var arrImg = box.getElementsByTagName('div');
var arrCho = document.getElementsByClassName("ul")[0].getElementsByTagName('li');

let i = 0;
function fright(){
    i++;
    if(i>=arrImg.length){
        i=0;
    }
    for(var j = 0;j<arrImg.length;j++){
        arrImg[j].className = "";
        arrCho[j].className = "";
    }
    arrCho[i].className = "choice";
    arrImg[i].className = 'act';
}

let times=setInterval(fright,2000);

box.onmouseover = function (){
    clearInterval(times);
};

box.onmouseout = function (){
    times=setInterval(fright,2000);
};
for( let k = 0;k<arrImg.length;k++){
    arrCho[k].index = k;
    arrCho[k].onclick = choice;
    function choice(){
        for(let b = 0;b<arrImg.length;b++){
            arrCho[b].className = "";
            arrImg[b].className = "";
        }
        this.className = "choice";
        arrImg[this.index].className = "act";
        i = this.index;
    }
}

let sect = document.getElementsByTagName("section")[0];
ajax("get","js/json2.json",'',function (data) {
    var mov = JSON.parse(data);
    // console.log( mov);
    for (index in mov){
        // console.log(mov[index]);
        let text = mov[index];
        var odiv = document.createElement("div");
        // console.log(text.product[0].Name);
        text.product.forEach(function (item) {
            // console.log(item);
            // odiv.setAttribute('data-id',item.id);
            odiv.innerHTML +=`<div data-id="${item.id}"><img src=${item.picSrc}>
                    <p>${item.Name}</p></div>`
        });
        sect.innerHTML += `<div class="box-img" id="${index}">
        <div class="content">
            <h3>${text.title}</h3>
            <h5></h5>
            <div class="pict">
                ${odiv.innerHTML}
            </div>
        </div>
    </div>`
    }
});
// if (!window.location.href.indexOf("#")==-1){
//     console.log(1);
//     setTimeout(()=>{
//         console.log(window.location.hash);
//         let wb = window.location.hash;
//
//         let bbc = window.location.href.substring(0,window.location.href.indexOf("#"));
//         console.log(bbc);
//         window.location.href = bbc+wb;
//     },300);
// }




var oDiv = document.querySelector("section");

oDiv.addEventListener("click",function (e){
    var ev=window.event||e;
    var  target=ev.target||ev.srcElement ;
    console.log(target.parentNode);
    console.log(target.nodeName);
    if (target.nodeName =="IMG") {
        window.open("details1.html?clothid="+target.parentNode.getAttribute("data-id"))
    }


});
















