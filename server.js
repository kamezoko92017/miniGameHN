var express=require("express");
var app= express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views", "./views");
var server=require("http").Server(app);
var io=require("socket.io")(server);
server.listen(process.env.PORT || 3000);

//Bien de luu danh sach hoc vien
var mang =[];

io.on("connection",socket=>{
    console.log('co nguoi ket noi:   '+socket.id);

    socket.on("hocvien-gui-thongtin",data=>{
        mang.push(
            new HocVien(data.hoten,data.email,data.sdt)
        )
        console.log(mang)
        io.sockets.emit("server-gui-ds", mang)
    })
})

function HocVien(hoten,email,sdt){
    this.hoten=hoten;
    this.email=email;
    this.sdt=sdt;
}

app.get("/",(req,res)=>{
    res.render("trangchu");
})