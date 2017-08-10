/**
 * Created by Administrator on 2017/7/19.
 */

//固定在顶部的导航栏
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

// 登录
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



//文字列表
+function(){
    var h1s=document.querySelectorAll("div.list-message>ul>li>h1");
    var divs=document.querySelectorAll("div.list-message>div>div");
    for(var i=0;i<h1s.length;i++){
        h1s[i].onclick=function(){
            for(var j=0;j<h1s.length;j++){
                h1s[j].style.borderColor="#fff";
            }
            this.style.borderColor="#000";
            var num=this.className;
            //console.log(num);
            for(var k=0;k<divs.length;k++){
                divs[k].style.opacity=0;
            }
            divs[num].style.opacity=1;
        }
    }
}();







//返回顶部
+function(){
    var timer=null;
    var top=document.querySelector("#to-top");
    var headr=document.querySelector("#top");
    window.onscroll=function(){
        if(document.body.scrollTop>=100){
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


// 加载商品列表
$(function () {
   $.ajax({
       type:"GET",
       url:"/productlist",
       success:function (data) {
           var html="";
           for(var i=0;i<data.length;i++){
               var o=data[i];
               html+=`<li class="${o.price}"><img src="${o.pic}"></li>`;
           }
           $("#ulList").html(html);
           $("#fix_ul").html(html);
       }
   });
   const LIWIDTH2=425.17;
   const LIWIDTH=99.56;
   var moved=0;
   $("#ulList").on("mouseover","li img",function (e) {
       $(e.target).css("transform","scale(1.2)");
       $("div.left-pic>a").css("opacity","1");
   });
   $("#ulList").on("mouseout","li img",function (e) {
       $(e.target).css("transform","scale(1)");
       $("div.left-pic>a").css("opacity","0");
   });
   $("div.left-pic>a").hover(function () {
       $("div.left-pic>a").css("opacity","1");
   },function () {
       $("div.left-pic>a").css("opacity","0");
   });
   $("div.left-pic>a>span").click(function (e) {
       if($(e.target).parent().next().length===1){
           if(moved>-8){
               moved--;
               $("#ulList").css("left",moved*LIWIDTH+"px");
           }
       }else{
            if(moved<0){
                moved++;
                $("#ulList").css("left",moved*LIWIDTH+"px");
            }
       }
   });
    $("#ulList").on("click","li img",function (e) {
        var newSrc=$(e.target).attr("src");
        var price=$(e.target).parent().attr("class");
        $("div.top-left-pic>ul>li>img").attr("src",newSrc);
        $("h2.price").html("$"+price+".00");
    });
    $("div.top-left-pic>span").click(function () {
        $("#fix-div").css("display","block");
        $("#fix-div").addClass("animated flipInX");
        var src=$("div.top-left-pic>ul>li>img").attr("src");
        var i=src.lastIndexOf("/");
        var is=src.lastIndexOf(".");
        var num=src.slice(i+1,is)-1;
        $("#fix_ul").css("left",-num*LIWIDTH2+"px");
        $("#fix-div>b>span:first-child").html(num+1);
        moved=-num;
        $("#fix-div>a>span").click(function (e) {
            if($(e.target).parent().attr("class")==="-1"){
                if(moved>-11){
                    moved--;
                }else{
                    moved=0;
                }
                $("#fix_ul").css("left",moved*LIWIDTH2+"px");
                console.log(moved);
            }else{
                if(moved<0){
                    moved++;
                }else{
                    moved=-11;
                }
                $("#fix_ul").css("left",moved*LIWIDTH2+"px");
            }
            $("#fix-div>b>span:first-child").html(Math.abs(moved)+1);
        });
    });
    $("#fix-div>span").hover(function () {
        $(this).css("color","#ffae4f");
    },function () {
        $(this).css("color","#ddd");
    });
    $("#fix-div>span").click(function () {
        $("#fix-div").css("display","none");
    });
});

//添加购物车
$("span.addCart").click(function (e) {
    var u=sessionStorage.getItem("uid");
    var oldSrc=$("div.top-left-pic>ul>li>img").attr("src");
    var i=oldSrc.lastIndexOf("/");
    var is=oldSrc.lastIndexOf(".");
    var p=oldSrc.slice(i+1,is);
    var c=$("[type=number]").val();
    if(u===null){
        alert("请先登录！");
    }else{
        $.ajax({
            type:"GET",
            url:"/updatecart2",
            data:{uid:u,pid:p,count:c},
            success:function (data) {
                alert(data.msg);
            }
        })
    }
});








