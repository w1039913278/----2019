
// 平移轮播
var oDiv = document.getElementsByClassName("products_content")[0],
    oImg =oDiv.getElementsByTagName("div")[0],
    oBox = document.getElementsByClassName("small_img")[0],
    oSmlimg = oBox.getElementsByTagName("p");
    oBtLeft = document.getElementsByClassName("btn_left")[0],
    oBtRig = document.getElementsByClassName("btn_rig")[0];
var num = 0;
var n = 0;
var flag = true;
var m = 0;
var mn = 0;
for (let i = 0;i<oSmlimg.length;i++){
    oSmlimg[i].onclick = function () {
        if (flag){
            flag = false;
            for (let k =0;k<oSmlimg.length;k++){
                oSmlimg[k].className = "";
            }
            oSmlimg[i].className = "act";
            moveimg(i)
        }
    }
}
function moveimg(i) {
    n = parseInt(-(i)*oImg.offsetWidth);
    oDiv.style.transition = "0.5s ease-in";
    oDiv.style.left = n + "px";
    setTimeout(function () {
        flag = true
    },550)
}
oBtLeft.onclick = function () {
    if (flag){
        flag = false;
        num--;
        if (num<0){
            num = 2
        }
        for (let k =0;k<oSmlimg.length;k++){
            oSmlimg[k].className = "";
        }
        oSmlimg[num].className = "act";
        moveimg(num)
    }

};
oBtRig.onclick = function () {
    if (flag){
        flag = false;
        num++;
        if (num>2){
            num = 0
        }
        for (let k =0;k<oSmlimg.length;k++){
            oSmlimg[k].className = "";
        }
        oSmlimg[num].className = "act";
        moveimg(num)
    }

};
// console.log(window.location.href);
// 首页轮播图

var box = document.getElementsByClassName('chart')[0];
var arrImg = box.getElementsByTagName('div');
var arrCho = document.getElementsByClassName("ul")[0].getElementsByTagName('li');
var i = 0;
function fright(){
    i++;
    if(i>=arrImg.length){
        i=0;
    }
    for(var j = 0;j<arrImg.length;j++){
        arrImg[j].className = "";
        arrCho[j].className = "";
    }
    arrCho[i].className = "post";
    arrImg[i].className = 'action';
}

var times=setInterval(fright,2000);

box.onmouseover = function (){
    clearInterval(times);
};

box.onmouseout = function (){
    times=setInterval(fright,2000);
};
for( var k = 0;k<arrImg.length;k++){
    arrCho[k].index = k;
    arrCho[k].onclick = choice;
    function choice(){
        for(var b = 0;b<arrImg.length;b++){
            arrCho[b].className = "";
            arrImg[b].className = "";
        }
        this.className = "post";
        arrImg[this.index].className = "action";
        i = this.index;
    }

}



var oDis = document.getElementsByClassName("display_contain")[0],
    oleftImg = document.getElementsByClassName("leftImg")[0],
    origImg = document.getElementsByClassName("rigImg")[0];

// console.log(oDis);
ajax("get","js/json1.json",'',function (data) {
    var mov = JSON.parse(data).List;
    // console.log( mov);
        mov.forEach(function (item,index) {
            var con = document.createElement("div");
            con.innerHTML = `<a class="jump" data-id="${item.goodID}"><div>   
                     <img src=${item.picSrc}>
                        <h3>${item.Name}</h3>
                        <p>${item.content}</p>
                    </div></a>`;
            // con.setAttribute('class','jump');
            // con.setAttribute('data-id',${item.goodID}'');
            oDis.appendChild(con);
        })
});
setTimeout(()=>{
    var jump = oDis.getElementsByClassName("jump");
    for(let i=0;i<jump.length;i++){
        jump[i].onclick=function(){
            console.log(this.getAttribute('data-id'));
            open("list.html"+"#"+this.getAttribute('data-id'),"_black")
        }
    }
},100);








function mov(i) {
    m = parseInt(-(i)*450);
    oDis.style.transition = "0.5s ease-in";
    oDis.style.left = m + "px";
    setTimeout(function () {
        flag = true
    },550)
}
oleftImg.onclick = function () {
    if (flag){
        flag = false;
        mn--;
        if (mn<0){
            mn = 7
        }
        // for (let k =0;k<oSmlimg.length;k++){
        //     oSmlimg[k].className = "";
        // }
        // oSmlimg[num].className = "act";
        mov(mn)
    }
};
origImg.onclick = function () {
    if (flag){
        flag = false;
        mn++;
        if (mn>7){
            mn = 0
        }
        // for (let k =0;k<oSmlimg.length;k++){
        //     oSmlimg[k].className = "";
        // }
        // oSmlimg[num].className = "act";
        mov(mn)
    }
};


















