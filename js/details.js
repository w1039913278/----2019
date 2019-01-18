var  num=location.search.substring(location.search.indexOf("=") + 1,);
let oBox = document.querySelector("section");
ajax("get","js/json3.json",'',function (data) {
    // console.log(JSON.parse(data));
    var da = JSON.parse(data);
    for (index in da){
        if (num ==index){
            // console.log(da[index][0].product);
            oBox.innerHTML+=`    <div class="boximg">
        <img src=${da[index][0].product} >
    </div>
    <div class="tab">
        <div class="tab_content">
            <h3>${da[index][0].title}</h3>
            <h4>场景与特征</h4>
            <h5></h5>
            <div>
                <img src=${da[index][0].scene}>
            </div>
        </div>
    </div>
    <div class="contain">
        <div class="contain_content">
            <h4>技术参数</h4>
            <h5></h5>
            <div>
                <img src=${da[index][0].parameter}>
            </div>
            <h4>安装示意</h4>
            <h5></h5>
        </div>
    </div>
    <div class="blank">
        <div>
            <img src=${da[index][0].install}>
        </div>
    </div>`
        }
    }


});
























