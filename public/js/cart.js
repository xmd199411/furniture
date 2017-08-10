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
                document.location.reload("cart.html");
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

//显示购物车商品
$(function () {
    var u=sessionStorage.getItem("uid");
    var subtotal=0;
    if(u===null){
        alert("请先登录！");
    }else{
        $.ajax({
            type:"GET",
            url:"/showcart",
            data:{uid:u},
            success:function (data) {
                var html="";
                for(var i=0;i<data.length;i++){
                    var o=data[i];
                    html+=`<tr>
                                <td><img src="${o.pic}"></td>
                                <td>Vestibulum suscipit</td>
                                <td>£${o.price}.00</td>
                                <td><input type="number" min="1" value="${o.count}"> </td>
                                <td class="subtotal">£${o.price*o.count}.00</td>
                                <td><a href="${o.cid}"><span class="glyphicon glyphicon-remove del"></span></a></td>
                            </tr>`;
                }
                $("#tb1").html(html);
            }
        })
    }
    // 商品列表总价
    $("div.check").click(function () {
        // console.log(arr);
        console.log($("td.subtotal"));
        for(var i=0;i<$("td.subtotal").length;i++){
            var o=$("td.subtotal")[i];
            var price=parseInt(o.innerHTML.slice(1));
            subtotal+=price;
        }
        $("span.subtotal").html("£"+subtotal+".00");
        subtotal=0;
    });

    // 商品列表跟新
    $("#tb1").on("change","[type=number]",function (e) {
        var num=$(e.target).val();
        var u=sessionStorage.getItem("uid");
        var c=$(e.target).parent().next().next().children("a").attr("href");
        var price=parseInt($(e.target).parent().prev().html().slice(1));
        $.ajax({
            type:"GET",
            url:"/updatenum",
            data:{uid:u,cid:c,count:num},
            success:function (data) {
                $(e.target).parent().next().html("£"+num*price+".00");
            }
        })
    });

    // 商品列表删除
    $("#tb1").on("click","span.del",function (e) {
        e.preventDefault();
        var u=sessionStorage.getItem("uid");
        var c=$(e.target).parent().attr("href");
        $.ajax({
            type:"GET",
            url:"/delcart",
            data:{uid:u,cid:c},
            success:function (data) {
                alert(data.msg);
                $(e.target).parent().parent().parent().remove();
            }
        })
    })
});


// 当在cart页面登录时
// $("span.update_cart").click(function(){
//
// })




