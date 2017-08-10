/**
 * Created by WEB-UID-JAVA on 2017/7/26.
 */
+function () {
    uname.onblur=function(){
        var unamereg=/^[a-zA-Z0-9]{3,12}$/i;
        if(!unamereg.test(this.value)){
            this.parentNode.nextElementSibling.innerHTML="您的用户名不符合规范！";
            this.parentNode.nextElementSibling.style.color="red";
        }else{
            $.ajax({
                type:"GET",
                url:"/testuname",
                data:{uname:this.value},
                success:function (data) {
                    $("#uname").parent().next().html(data.msg);
                    if(data.code>0){
                        $("#uname").parent().next().css("color","green");
                    }else{
                        $("#uname").parent().next().css("color","red");
                    }
                }
            })
        }
    };
    uname.onfocus=function () {
        this.parentNode.nextElementSibling.innerHTML="用户名可以包含数字或字母";
        this.parentNode.nextElementSibling.style.color="#ddd";
    };
    upwd1.onblur=function(){
        var upwdreg=/^[a-zA-Z0-9]{3,12}$/i;
        if(!upwdreg.test(this.value)){
            this.parentNode.nextElementSibling.innerHTML="您的密码不符合规范！";
            this.parentNode.nextElementSibling.style.color="red";
        }
    };
    upwd1.onfocus=function () {
        this.parentNode.nextElementSibling.innerHTML="密码长度在6~12位之间";
        this.parentNode.nextElementSibling.style.color="#ddd";
    };
    upwd2.onblur=function () {
        if(upwd1.value!==upwd2.value){
            this.parentNode.nextElementSibling.innerHTML="密码不相同";
            this.parentNode.nextElementSibling.style.color="red";
        }else{
            this.parentNode.nextElementSibling.innerHTML="";
        }
    };
    $("#btn").click(function () {
        var unamereg=/^[a-zA-Z0-9]{3,12}$/i;
        var upwdreg=/^[a-zA-Z0-9]{3,12}$/i;
        if(!unamereg.test($("#uanme").val())){
            return;
        }
        if(!upwdreg.test($("#upwd1").val())){
            return;
        }
        if($("#upwd1").val()!==$("#upwd2").val()){
            return;
        }
        var u=$("#uname").val();
        var p=$("#upwd1").val();
        $.ajax({
            type:"POST",
            url:"/reg.do",
            data:{uname:u,upwd:p},
            success:function (data) {
                alert(data.msg);
                location.href="index.html";
            }
        });
    })
}();










