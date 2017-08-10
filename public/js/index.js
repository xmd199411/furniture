/**
 * Created by Administrator on 2017/7/14.
 */
//+function(){
//    var head=document.querySelector("#top");
//    //console.log(head);
//    window.onscroll=function(){
//       if(document.body.scrollTop>1000){
//           console.log(document.body.scrollTop);
//       }
//    };
//}();
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
            console.log(h5s);
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



//图片轮播
+function(){
    var arr=["animated flipInY","animated flipInX"
        //"animated flash",
        //"animated pulse",
        //"animated rubberBand",
        //"animated shake",
        //"animated headShake",
        //"animated swing",
        //"animated tada",
        //"animated wobble",
        //"animated jello",
        //"animated bounceIn",
        //"animated bounceInDown",
        //"animated bounceInLeft",
        //"animated bounceInRight",
        //"animated bounceInUp"];
    ];
    var imgs=[
        "img/slider/1.jpg",
        "img/slider/2.jpg"
    ];
    var pdiv=document.querySelector("nav>div:first-child");
    var str="";
    for(var key of imgs){
        str+=`<img src="${key}">`;
    }
    pdiv.innerHTML=str;
    var imgs1=document.querySelector("nav>div>img");
    imgs1.className="show";
    //console.log(imgs1.getAttribute("width"));
    var moved=0;
    const LIWIDTH=1423;
    function task(){
        var simg=document.querySelector("nav img.show");
        simg.className="";
        var i=parseInt(Math.random()*2);
        if(simg.nextElementSibling!==null){
            moved++;
            pdiv.style.left=-moved*LIWIDTH+"px";
            simg.nextElementSibling.className="show "+arr[i];
        }else{
            moved=0;
            pdiv.style.left=-moved*LIWIDTH+"px";
            simg.parentNode.children[0].className="show "+arr[i];
        }
    }
    var timer=setInterval(task,5000);
    var himgs=document.querySelectorAll("nav>div>img");
    for(var i=0;i<himgs.length;i++){
        himgs[i].onmouseover=function(){
            clearInterval(timer);
            timer=null;
        };
        himgs[i].onmouseout=function(){
            timer=setInterval(task,5000);
        };
    }
}();
+function(){
    window.onload=function(){
        var span=document.querySelector("nav>div:last-child>span");
        var p=document.querySelector("nav>div:last-child>p");
        var h4=document.querySelector("nav>div:last-child>h4");
        span.style.top=0+"px";
        p.style.left=0+"px";
        h4.style.left=0+"px";
    }
}();
+function(){
    //上半部遮罩层效果
    var as=document.querySelectorAll("#new-arrivals>div>ul:first-child>li>a");
    for(var i=0;i<as.length;i++){
        as[i].onmouseover=function(){
            this.parentNode.children[5].style.top=0;
            this.parentNode.children[5].onmouseover=function(){
                this.style.top=0;
            }
        };
        as[i].onmouseout=function(){
            this.parentNode.children[5].style.top=-100+"%";
            this.parentNode.children[5].onmouseout=function(){
                this.style.top=-100+"%";
            }
        }
    }
    //下半部遮罩层效果
    var as=document.querySelectorAll("#new-arrivals>div>ul:last-child>li>a");
    for(var i=0;i<as.length;i++){
        as[i].onmouseover=function(){
            this.parentNode.children[5].style.top=0;
            this.parentNode.children[5].onmouseover=function(){
                this.style.top=0;
            }
        };
        as[i].onmouseout=function(){
            this.parentNode.children[5].style.top=100+"%";
            this.parentNode.children[5].onmouseout=function(){
                this.style.top=100+"%";
            }
        }
    }
    //星级评价
    var spans=document.querySelectorAll("div.xinxin>a>span");
    //console.log(spans);
    for(var i=0;i<spans.length;i++){
        spans[i].onclick=function(e){
            var j=this.parentNode.className;
            console.log(j);
            e.preventDefault();
            this.style.color="#ffae4f";
            for(var k=0;k<j;k++) {
                this.parentNode.parentNode.children[k].children[0].style.color = "#ffae4f";
            }
            for(var z=j;z<5;z++) {
                this.parentNode.parentNode.children[z].children[0].style.color = "#000";
                console.log(this.parentNode.parentNode.children[z]);
            }
        }
    }
    //列表滑动
    const DLIWIDTH=569.2;
    var lis=document.querySelectorAll("#new-arrivals>ul>li");
    var uls=document.querySelectorAll("#new-arrivals>div>ul");
    lis[0].children[0].style.color="#ffae4f";
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(e){
            e.preventDefault();
            var j=this.className-1;
            for(var k=0;k<uls.length;k++){
                uls[k].style.left=-j*DLIWIDTH+"px";
            }
            for(var z=0;z<lis.length;z++){
                lis[z].children[0].style.color="#000";
            }
            this.children[0].style.color="#ffae4f";
        }
    }

    //按钮滑动
    const LIWIDTH=284.6;
    var ulis=document.querySelectorAll("#new-arrivals>div>ul>li");
    var is=document.querySelectorAll("#new-arrivals>i");
    var moved=0;
    for(var i=0;i<ulis.length;i++){
        ulis[i].onmouseover=function(){
            for(var j=0;j<is.length;j++){
                is[j].style.opacity=1;
            }
        };
        ulis[i].onmouseout=function(){
            for(var j=0;j<is.length;j++){
                is[j].style.opacity=0;
            }
        }
    }
    for(var i=0;i<is.length;i++){
        is[i].onmouseover=function(){
            for(var j=0;j<is.length;j++){
                is[j].style.opacity=1;
            }
            this.style.borderColor="#ffae4f";
            this.children[0].style.color="#ffae4f";
        };
        is[i].onmouseout=function(){
            for(var j=0;j<is.length;j++){
                is[j].style.opacity=0;
            }
            this.style.borderColor="#ddd";
            this.children[0].style.color="#ddd";
        };
        is[i].onclick=function(){
            if(this.className==="-1"){
                if(moved>-8){
                    moved--;
                    for(var j=0;j<uls.length;j++){
                        uls[j].style.left=LIWIDTH*moved+"px";
                    }
                }
            }
            else{
                if(moved<0){
                    moved++;
                    for(var j=0;j<uls.length;j++){
                        uls[j].style.left=LIWIDTH*moved+"px";
                    }
                }
            }
        }
    }
}();
+function(){
    //图片搜索栏的正则表达式[A-Za-z0-9]+[@]{1}[a-z0-9]{2,3}[.](com)
    var span=document.querySelector("div.search>div>span");
    var val=document.querySelector("div.search>div>input");
    var div=document.querySelector("div.search>div:last-child");
    span.onmouseover=function(){
        span.style.color="#ffae4f";
    };
    span.onmouseout=function(){
        span.style.color="#000";
    };
    span.onclick=function(){
        var reg=/[A-Za-z0-9]+[@]{1}[a-z0-9]{2,3}[.](com)/g;
        if(val.value===""){
            div.innerHTML="邮箱不能为空";
        }
        else if(reg.test(val.value)!==true){
            div.innerHTML="邮箱格式不正确";
        }else{
            div.innerHTML="正在订阅中....";
            div.style.color="green";
        }
    };
    setInterval(function(){
        if(div.innerHTML==="正在订阅中...."){
            div.innerHTML="订阅成功！！！";
            div.style.color="green";
        }
    },2000)
}();
//图片无缝轮播
// +function(){
//     var src=["img/brand/1.jpg",
//             "img/brand/2.jpg",
//             "img/brand/3.jpg",
//             "img/brand/4.jpg",
//             "img/brand/5.jpg"];
//     var div=document.querySelector("#icon-move>div");
//     var ul=document.querySelector("#icon-move>div>ul");
//     var lis=document.querySelectorAll("#icon-move>div>ul>li");
//     ul.innerHTML+=ul.innerHTML;
//     var left=ul.style.left;
//     const LIWIDTH=227.67;
//     var width=10*LIWIDTH;
//     function move(){
//         if(left>-width/2){
//             left--;
//             ul.style.left=left+"px";
//         }else if(left=-width/2){
//             left=0;
//             ul.style.left=left+"px";
//         }
//     }
//    var timer= setInterval(move,10);
//     ul.onmouseover=function(e){
//         clearInterval(timer);
//         timer=null;
//         if(e.target.nodeName==="IMG"){
//             e.target.className="animated swing";
//             e.target.style.opacity=1;
//         }
//     };
//     ul.onmouseout=function(e){
//         timer=setInterval(move,10);
//         if(e.target.nodeName==="IMG"){
//             e.target.className="";
//             e.target.style.opacity=0.5;
//         }
//     }
// }();


// 至顶
+function(){
    var timer=null;
    var top=document.querySelector("#to-top");
    var headr=document.querySelector("#top");
    window.onscroll=function(){
        if(document.body.scrollTop>=1000){
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


//画布效果
+function(){
    var cvs=document.querySelectorAll("canvas.cv");
    // console.log(cvs);
    var x=0;
    var yDerction=1;
    var y=0.5;
    for(var i=0;i<cvs.length;i++){
        //var ctx=cvs.getContext("2d");
        cvs[i].onmouseover=function(){
            var ctx=this.getContext("2d");
            ctx.strokeStyle="#ffae4f";
            ctx.lineWidth=2;
            // console.log(1);
            var timer=setInterval(function(){
                y+=yDerction;
                x=2*y;
                ctx.beginPath();
                ctx.moveTo(267.5,12);
                ctx.lineTo(267.5-x,12);
                ctx.lineTo(267.5+x,12);

                ctx.moveTo(267.5,255);
                ctx.lineTo(267.5-x,255);
                ctx.lineTo(267.5+x,255);

                ctx.moveTo(24.5,133.5);
                ctx.lineTo(24.5,133.5-y);
                ctx.lineTo(24.5,133.5+y);

                ctx.moveTo(510.5,133.5);
                ctx.lineTo(510.5,133.5-y);
                ctx.lineTo(510.5,133.5+y);
                ctx.stroke();
                if(y===121.5){
                    y=0.5;
                    clearInterval(timer);
                }
                this.onmouseout=function(){
                    clearInterval(timer);
                    //var ctx=this.getContext("2d");
                    ctx.clearRect(0,0,535,267);
                };
                this.onmouseover=function(){
                    y=0.5;
                }
            },1)
        };
        cvs[i].onmouseout=function(){
            var ctx=this.getContext("2d");
            ctx.clearRect(0,0,535,267);
        }
    }
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
           alert("网络正忙，请稍后重试！");
       }
   })
});

$(function () {
    if(sessionStorage.getItem("uname")){
        var u=sessionStorage.getItem("uname");
        $("#den>a").html(u);
    }
});

// 购物车
$("div.zz>div>a").on("click","span.addcart",function(e){
   e.preventDefault();
   var u=sessionStorage.getItem("uid");
   var p=$(e.target).parent().attr("href");
   // console.log(u,p);
    // console.log(u);
    if(u===null){
        alert("请先登录！");
    }else{
        $.ajax({
            type:"GET",
            url:"/updatecart",
            data:{uid:u,pid:p},
            success:function (data) {
                alert(data.msg);
            },
            err:function () {
                alert("网络正忙，请稍后重试！");
            }
        })
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




















