const http=require("http");
const express=require("express");
const qs=require("querystring");
const mysql=require("mysql");

var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"pj",
    port:3306,
    connectionLimit:25
});

var app=express();
var server=http.createServer(app);
server.listen(8081);

app.use(express.static("public"));

// 检查用户名是否被注册
app.get("/testuname",(req,res)=>{
    var u=req.query.uname;
    pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM pj_user WHERE uname=?";
        conn.query(sql,[u],(err,result)=>{
            if(err) throw err;
            if(result.length<1){
                res.json({code:1,msg:"改用户名可以使用"});
                conn.release();
            }else{
                res.json({code:-1,msg:"该用户名已被占用"});
                conn.release();
            }

        })
    })
});


// 注册
app.post("/reg.do",(req,res)=>{
    req.on("data",(data)=>{
        var str=data.toString();
        var obj=qs.parse(str);
        var u=obj.uname;
        var p=obj.upwd;
        pool.getConnection((err,conn)=>{
            var sql="INSERT INTO pj_user VALUES(null,?,?)";
            conn.query(sql,[u,p],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.json({cod:1,msg:"注册成功"});
                    conn.release();
                }else{
                    res.json({code:-1,msg:"注册失败"});
                    conn.release();
                }
            })
        })
    })
});

// 登录
app.get("/login.do",(req,res)=>{
    var u=req.query.uname;
    var p=req.query.upwd;
    pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM pj_user WHERE uname=? AND upwd=?";
        conn.query(sql,[u,p],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.json({code:1,msg:"登录成功！",uid:result[0].uid});
                conn.release();
            }else{
                res.json({code:-1,msg:"用户名或密码错误"});
                conn.release();
            }
        })
    })
});


// 更新购物车
app.get("/updatecart",(req,res)=>{
    var u=req.query.uid;
    var p=req.query.pid;
        pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM pj_cart WHERE uid=? AND pid=?";
        conn.query(sql,[u,p],(err,result)=>{
            if(err) throw err;
            // console.log(result.length);
            if (result.length > 0) {
                var i = parseInt(result[0].count) + 1;
                var sql = "UPDATE pj_cart SET count=count+1 WHERE uid=? AND pid=?";
                conn.query(sql, [u, p], (err, result) => {
                    if (err) throw err;
                    res.json({code: 1, msg: "添加成功，数量为：" + i});
                    conn.release();
                })
            } else {
                var sql = "INSERT INTO pj_cart VALUES(null,?,?,1)";
                conn.query(sql, [u, p], (err, result) => {
                    if (err) throw err;
                    res.json({code: -1, msg: "添加成功，数量为：1"});
                    conn.release();
                })
            }
        })
    })
});

// 图标
app.get("/icon",(req,res)=>{
   pool.getConnection((err,conn)=>{
       var sql="SELECT * FROM pj_tubiao";
       conn.query(sql,(err,result)=>{
           if(err) throw err;
           res.json(result);
           conn.release();
       })
   })
});


//商品加载
app.get("/productlist",(req,res)=>{
   pool.getConnection((err,conn)=>{
       var sql="SELECT * FROM pj_product";
       conn.query(sql,(err,result)=>{
           if(err) throw err;
           res.json(result);
           conn.release();
       })
   })
});

//product-details下的购物车更新
app.get("/updatecart2",(req,res)=>{
    var u=req.query.uid;
    var p=req.query.pid;
    var c=req.query.count;
    pool.getConnection((err,conn)=>{
        var sql="SELECT * FROM pj_cart WHERE uid=? AND pid=?";
        conn.query(sql,[u,p],(err,result)=>{
            if(err) throw err;
            // console.log(result.length);
            if(result.length>0){
                var i=parseInt(result[0].count)+parseInt(c);
                var sql="UPDATE pj_cart SET count=count+? WHERE uid=? AND pid=?";
                conn.query(sql,[c,u,p],(err,result)=>{
                    if(err) throw err;
                    res.json({code:1,msg:"添加成功，数量为："+i});
                    conn.release();
                })
            }else{
                var sql="INSERT INTO pj_cart VALUES(null,?,?,?)";
                conn.query(sql,[u,p,c],(err,result)=>{
                    if(err) throw err;
                    res.json({code:-1,msg:"添加成功，数量为："+c});
                    conn.release();
                })
            }
        })
    })
});


//取值范围
app.get("/range",(req,res)=>{
   var l=req.query.lower;
   var u=req.query.upper;
   pool.getConnection((err,conn)=>{
       var sql="SELECT * FROM pj_product WHERE price>=? AND price<=?";
       conn.query(sql,[l,u],(err,result)=>{
           if(err) throw err;
           if(result.length>0){
               res.json(result);
               conn.release();
           }else{
               res.json({code:-1,msg:"没有符合的商品"});
               conn.release();
           }
       })
   })
});

// 购物车商品显示
app.get("/showcart",(req,res)=>{
    var u=req.query.uid;
    pool.getConnection((err,conn)=>{
        var sql="SELECT p.pic,p.price,c.count,c.cid FROM pj_product p,pj_cart c WHERE c.pid=p.pid AND c.uid=?";
        conn.query(sql,[u],(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});


// 更新购物车商品数量
app.get("/updatenum",(req,res)=>{
    var u=req.query.uid;
    var c=req.query.cid;
    var num=req.query.count;
    pool.getConnection((err,conn)=>{
        var sql="UPDATE pj_cart SET count=? WHERE uid=? AND cid=?";
        conn.query(sql,[num,u,c],(err,result)=>{
            if(err) throw err;
            res.json({code:1,msg:"更新成功!"});
            conn.release();
        })
    })
});
app.get("/delcart",(req,res)=>{
   var u=req.query.uid;
   var c=req.query.cid;
   pool.getConnection((err,conn)=>{
       var sql="DELETE FROM pj_cart WHERE uid=? AND cid=?";
       conn.query(sql,[u,c],(err,result)=>{
           if(err) throw err;
           res.json({cod:1,msg:"删除成功！"});
           conn.release();
       })
   })
});









