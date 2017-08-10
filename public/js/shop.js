/**
 * Created by Administrator on 2017/7/17.
 */
+function(){
    var top=document.querySelector("#top");
    window.onscroll=function(){
        if(document.body.scrollTop>0){
            top.style.background="#ddd";
            top.style.opacity=0.7;
        }else{
            top.style.background="";
            top.style.opacity=1;
        }
    };
    top.onmouseover=function(){
        this.style.opacity=1;
    };
    top.onmouseout=function(){
        this.style.opacity=0.7;
    }
}();



// 根据价格区间来确定商品列表的函数
function picList(l,u) {
        $.ajax({
            type:"GET",
            url:"/range",
            data:{lower:l,upper:u},
            success:function (data) {
                var html1="";
                var html2="";
                var html3="";
                var num=Math.ceil((data.length/4));
                var numx=(data.length)%4;
                // 第1个显示方式的列表
                for(var i=0;i<data.length;i++){
                    var o=data[i];
                    if((i+1)%3===0){
                        html1+=`<li class="nom">
                            <a class="after"><img src="${o.pic}"></a>
                            <span>NEW</span>
                            <h3><a href="">Cras Neque Metus</a></h3>
                            <h3>$${o.price}.00</h3>
                            <div class="xinxin">
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                            </div>
                            <div class="zz">
                                <div>
                                    <a href="${o.pid}"><span class="glyphicon glyphicon-shopping-cart addcart"></span></a><span>|</span>
                                    <a><span class="glyphicon glyphicon-heart-empty"></span></a><span>|</span>
                                    <a><span class="glyphicon glyphicon-folder-close"></span></a>
                                    <a><span class="glyphicon glyphicon-eye-open"></span></a>
                                </div>
                            </div>
                        </li>`;
                    }else{
                        html1+=`<li>
                            <a class="after"><img src="${o.pic}"></a>
                            <span>NEW</span>
                            <h3><a href="">Cras Neque Metus</a></h3>
                            <h3>$${o.price}.00</h3>
                            <div class="xinxin">
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                            </div>
                            <div class="zz">
                                <div>
                                    <a href="${o.pid}"><span class="glyphicon glyphicon-shopping-cart addcart"></span></a><span>|</span>
                                    <a><span class="glyphicon glyphicon-heart-empty"></span></a><span>|</span>
                                    <a><span class="glyphicon glyphicon-folder-close"></span></a>
                                    <a><span class="glyphicon glyphicon-eye-open"></span></a>
                                </div>
                            </div>
                        </li>`;
                    }
                }
                // 第2个显示列表的方式
                // 2.1刚好是4的倍数
                if(numx===0){
                    for(var j=0;j<num;j++){
                        html2+=`<li>`;
                        for(var k=0;k<4;k++){
                                var obj=data[j*4+k];
                                html2+=`<div>
                                    <div class="left-img">
                                        <img src="${obj.pic}">
                                        <span>NEW</span>
                                    </div>
                                    <div class="right-img">
                                        <h1>Mattis Lobortis</h1>
                                        <h3>$${obj.price}.00</h3>
                                        <div class="move">
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                        </div>
                                        <span>
                                            Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.
                                            Accessorize with a straw hat and you're ready for summer!
                                        </span>
                                        <div class="mess">
                                            <a href="${obj.pid}"><span class="add_cart">ADD TO CART</span></a>|
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>|
                                            <a><span class="glyphicon glyphicon-folder-close"></span></a>|
                                            <a><span class="glyphicon glyphicon-eye-open"></span></a>
                                        </div>
                                        <i></i><i></i>
                                    </div>
                                </div>`;
                        }
                        html2+=`</li>`;

                    }
                }
                // 2.2还有余数
                else{
                    for(var j=0;j<num-1;j++){
                        html2+=`<li>`;
                        for(var k=0;k<4;k++){
                            var obj=data[j*4+k];
                            html2+=`<div>
                                    <div class="left-img">
                                        <img src="${obj.pic}">
                                        <span>NEW</span>
                                    </div>
                                    <div class="right-img">
                                        <h1>Mattis Lobortis</h1>
                                        <h3>$${obj.price}.00</h3>
                                        <div class="move">
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                        </div>
                                        <span>
                                            Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.
                                            Accessorize with a straw hat and you're ready for summer!
                                        </span>
                                        <div class="mess">
                                            <a href="${obj.pid}"><span class="add_cart">ADD TO CART</span></a>|
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>|
                                            <a><span class="glyphicon glyphicon-folder-close"></span></a>|
                                            <a><span class="glyphicon glyphicon-eye-open"></span></a>
                                        </div>
                                        <i></i><i></i>
                                    </div>
                                </div>`;
                        }
                        html2+=`</li>`;
                    }
                    html2+=`<li>`;
                    for(var z=0;z<numx;z++){
                        var obj=data[(num-1)*4+z];
                        html2+=`<div>
                                    <div class="left-img">
                                        <img src="${obj.pic}">
                                        <span>NEW</span>
                                    </div>
                                    <div class="right-img">
                                        <h1>Mattis Lobortis</h1>
                                        <h3>$${obj.price}.00</h3>
                                        <div class="move">
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>
                                        </div>
                                        <span>
                                            Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.
                                            Accessorize with a straw hat and you're ready for summer!
                                        </span>
                                        <div class="mess">
                                            <a href="${obj.pid}"><span class="add_cart">ADD TO CART</span></a>|
                                            <a><span class="glyphicon glyphicon-heart-empty"></span></a>|
                                            <a><span class="glyphicon glyphicon-folder-close"></span></a>|
                                            <a><span class="glyphicon glyphicon-eye-open"></span></a>
                                        </div>
                                        <i></i><i></i>
                                    </div>
                                </div>`;
                    }
                    html2+=`</li>`;
                }
                // 第3种按钮列表
                html3+=`<span class="page"><</span>`;
                for(var i=0;i<num;i++){
                    if(i===0){
                        html3+=`<span class="active">${i+1}</span>`;
                    }else{
                        html3+=`<span>${i+1}</span>`;
                    }
                }
                html3+=`<span class="page">></span>`;
                $("#pic_list").html(html1);
                $("#mes_list").html(html2);
                $("#btn_list").html(html3);
            }
        })

    }

//导航栏
+function(){
    var lis=document.querySelector("li.search>a");
    var divs=document.querySelector("li.search>div");
    lis.onclick=function(e){
        e.preventDefault();
        if(divs.className=="hid"){
            divs.className=""
        }else{
            divs.className="hid";
        }
    };
    var li2=document.querySelector("li.shopping");
    var div2=document.querySelector("li.shopping>div");
    var ai=document.querySelectorAll("li.shopping>div>div>div:last-child>a");

    li2.onmouseover=function(e){
        div2.className="";
    };
    li2.onmouseout=function(e){
        div2.className="hid";
    };
    for(var i=0;i<ai.length;i++){
        ai[i].onclick=function(){
            var sum=0;
            this.parentNode.parentNode.remove();
            var h5s=document.querySelectorAll("li.shopping div h5");
            //console.log(h5s.text);
            //console.log(h5s);
            for(var j=0;j<h5s.length;j++){
                var obj=h5s[j];
                sum+=parseFloat(obj.innerHTML.slice(2));
            }
            var span=document.querySelector("li.shopping div span:last-child");
            span.innerHTML="£ "+sum;
        }
    }
    var li3=document.querySelector("li.tool>a");
    var div3=document.querySelector("li.tool>ul");
    li3.onclick=function(e){
        e.preventDefault();
        if(div3.className==="hid"){
            div3.className=""
        }
        else
            div3.className="hid";

    }
}();


//物品价格区间
+function(){
    var divl=document.querySelector("div.left-message div.ml");
    var divr=document.querySelector("div.left-message div.mr");
    var div=document.querySelector("div.left-massage>div");
    var spanl=document.querySelector("ul.jg>li>span>span:first-child");
    var spanr=document.querySelector("ul.jg>li>span>span:last-child");
    var fw=document.querySelector("div.fw");
    var canMove1=false;
    var canMove2=false;
    var offsetlX=0;
    var offsetrX=0;
    var l=75;
    var u=200;
    divl.onmousedown=function(e){
        canMove1=true;
        offsetlX=e.offsetX;
        //offsetY=e.offsetY;
    };
    divl.onmouseup=function(e){
        canMove1=false;
        offsetlX=0;
        l=$("span.price>span:first-child").html();
        u=$("span.price>span:last-child").html();
        picList(l,u);
        $("#mes_list").css("left","0");
    };
    divr.onmousedown=function(e){
        canMove2=true;
        offsetrX=e.offsetX;
        //offsetY=e.offsetY;
    };
    divr.onmouseup=function(e){
        canMove2=false;
        offsetrX=0;
        l=$("span.price>span:first-child").html();
        u=$("span.price>span:last-child").html();
        picList(l,u);
        $("#mes_list").css("left","0");
    };
    document.onmousemove=function(e){
        var lleft=e.clientX-offsetlX-166.063;
        var rleft=e.clientX-offsetrX-166.063;
        var ll=parseInt(spanl.innerHTML);
        var rl=parseInt(spanr.innerHTML);
        if(canMove1){
            if(lleft>0&&lleft<rl){
                divl.style.left = lleft + "px";
                spanl.innerHTML=parseInt(lleft);
            }

        }
        if(canMove2){
            if(rleft<205&&rleft>ll){
                divr.style.left=rleft+"px";//205
                spanr.innerHTML=parseInt(rleft);
            }

        }
        fw.style.width=rl-ll+"px";
        fw.style.left=ll+20+"px";

    };
}();


// 页面加载好现实商品列表
$(function () {
   picList(75,200);
});


// d登录
+function () {
    var den=document.querySelector("#den>a");
    den.onclick=function () {
        console.log(this.parentNode.children[1].className);
        if(this.parentNode.children[1].className==="hid"){
            this.parentNode.children[1].className="";
            this.parentNode.children[1].className="animated swing";
        }else{
            this.parentNode.children[1].className="hid";
        }
    };
    btn2.onclick=function () {
        location.href="register.html";
    }
}();


//right-message的排列方式
+function(){
    var lis=document.querySelectorAll("div.list>ul>li");
    var divs=document.querySelectorAll("div.right-message>div");
    //console.log(divs);
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            var j=parseInt(this.className);
            for(var k=0;k<lis.length;k++){
                this.parentNode.children[k].style.borderColor="#ddd";
                this.parentNode.children[k].children[0].style.color="#000";
            }
            this.style.borderColor="#ffae4f";
            this.children[0].style.color="#ffae4f";
            for(var z=1;z<divs.length;z++){
                divs[z].style.display="none";
            }
            divs[j].style.display="block";

        }
    }
}();

// 爱心评级
$(function () {
    // 第一种排列方式
   $("#pic_list").on("click","div.xinxin span",function (e) {
       $(e.target).parent().nextAll().children().css("color","black");
       $(e.target).parent().prevAll().children().css("color","#ffae4f");
       $(e.target).css("color","#ffae4f");
   });
    // 第二种排列方式
    $("#mes_list").on("click","div.move span",function (e) {
        $(e.target).parent().nextAll().children().css("color","black");
        $(e.target).parent().prevAll().children().css("color","#ffae4f");
        $(e.target).css("color","#ffae4f");
    })
});

//翻页
$(function () {
    const LIWIDTH=796.86;
    $("#btn_list").on("mouseover","span.page",function (e) {
        $(e.target).addClass("active1");
    });
    $("#btn_list").on("mouseout","span.page",function (e) {
        $(e.target).removeClass("active1");
    });
    // 列表翻页函数
    $("#btn_list").on("click","span",function (e) {
        console.log($(e.target).html());
        if($(e.target).html()==="&lt;"){
            if($("span.active").html()==="1"){
                $(e.target).nextAll().removeClass("active");
                $(e.target).parent().children("span:last-child").prev().addClass("active");
            }else{
                $("span.active").prev().addClass("active");
                $("span.active").next().removeClass("active");
            }
        }else if($(e.target).html()==="&gt;"){
            if($("span.active").html()===$(e.target).prev().html()){
                $(e.target).prevAll().removeClass("active");
                $(e.target).parent().children("span:first-child").next().addClass("active");
            }else{
                $("span.active").next().addClass("active");
                $("span.active").prev().removeClass("active");
            }
        }else{
            $(e.target).parent().children(".active").removeClass("active");
            $(e.target).addClass("active");
        }

        var i=$("span.active").html()-1;
        $("#mes_list").css("left",-i*LIWIDTH+"px");
    });
});



//返回顶部
+function(){
    var timer=null;
    var top=document.querySelector("#to-top");
    var headr=document.querySelector("#top");
    window.onscroll=function(){
        if(document.body.scrollTop>=200){
            top.className="";
            headr.style.background="#ddd";
            headr.style.opacity=0.7;
            headr.onmouseover=function(){
                headr.style.background="";
                headr.style.opacity=1;
            };
            headr.onmouseout=function(){
                headr.style.background="#ddd";
                headr.style.opacity=0.7;
            };

        }
        else{
            top.className="hid";
            headr.style.background="";
            headr.style.opacity=1;
        }
        top.onmouseover=function(){
            this.innerHTML=`TOP`;
        };
        top.onmouseout=function(){
            this.innerHTML=`<span class="glyphicon glyphicon-menu-up"></span>`;
        };

        top.onclick=function(){
            clearInterval(timer);
            timer=setInterval(()=>{
                var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
                var now=scrolltop;
                var speed=(0-now)/10;
                speed=speed?Math.ceil(speed):Math.floor(speed);
                if(speed===0) clearInterval(timer);
                document.body.scrollTop=scrolltop+speed;
                document.documentElement.scrollTop=scrolltop+speed;
                //console.log(1);
            },20)
        }
    };

}();



// 用户登录
$("#btn1").click(function(){
    var u=$("#uname").val();
    var p=$("#upwd").val();
    // console.log(u,p);
    $.ajax({
        type:"GET",
        url:"/login.do",
        data:{uname:u,upwd:p},
        success:function(data){
            if(data.code>0){
                $("#den>a").html(u);
                $("#den>div").addClass("hid");
                sessionStorage.setItem("uname",u);
                sessionStorage.setItem("uid",data.uid);
            }else{
                alert(data.msg);
                sessionStorage.removeItem("uname");
                sessionStorage.removeItem("uid");
            }

        },
        err:function () {
            alert("网络正忙，请稍后重试！")
        }
    })
});

// 页面加载时的用户显示
$(function () {
    if(sessionStorage.getItem("uname")){
        var u=sessionStorage.getItem("uname");
        $("#den>a").html(u);
    }
});


// 加载图标
$(function () {
    $.ajax({
        type:"GET",
        url:"/icon",
        success:function (data) {
            var html="";
            for(var i=0;i<data.length;i++){
                var o=data[i];
                html+=`
                <li><img src="${o.tpic}"></li>
                `;
            }
            $("#ul1").html(html);
            $("#ul1").html($("#ul1").html()+$("#ul1").html());
            // console.log($("#ul1").html());
            const  LIW=227.67;
            const   WIDTH=10*LIW;
            var left=0;
            function move() {
                if(left>-WIDTH/2){
                    left--;
                    $("#ul1").css("left",left);
                }
                else{
                    left=0;
                    $("#ul1").css("left",left);
                }
            };
            var timer=setInterval(move,10);
            $("#ul1").on("mouseover","li img",(e)=>{
                clearInterval(timer);
                timer=null;
                $(e.target).parent().addClass("animated swing");
                $(e.target).css("opacity","1");
            });
            $("#ul1").on("mouseout","li img",(e)=>{
                timer=setInterval(move,10);
                $(e.target).parent().removeClass();
                $(e.target).css("opacity","0.5");
            });
        },
        err:function () {
            alert("网络正忙，请稍后重试！");
        }
    });
});


// 添加商品至购物车
$(function () {
   $("#pic_list").on("click","span.addcart",function (e) {
       e.preventDefault();
       var u=sessionStorage.getItem("uid");
       var p=$(e.target).parent().attr("href");
       // console.log(u,p);
       if(u===null){
           alert("请先登录！");
       }else{
           $.ajax({
               type:"GET",
               url:"/updatecart",
               data:{uid:u,pid:p},
               success:function (data) {
                   alert(data.msg);
               }
           })
       }
   });
   $("#mes_list").on("click","span.add_cart",function (e) {
       e.preventDefault();
       var u=sessionStorage.getItem("uid");
       var p=$(e.target).parent().attr("href");
       // console.log(u,p);
       if(u===null){
           alert("请先登录！");
       }else{
           $.ajax({
               type:"GET",
               url:"/updatecart",
               data:{uid:u,pid:p},
               success:function (data) {
                   alert(data.msg);
               }
           })
       }
   })
});

