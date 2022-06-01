//Tạo kết nối đến server
var socket=io("https://minigamehn.herokuapp.com");

socket.on("server-gui-ds",data=>{
    $("#ds").html("");

    data.map((hocvien,index)=>{
        $("#ds").append(`
            <div class="hocvien">
                <div class="hang1">id:`+index+` || <span>`+hocvien.hoten+`</span></div>
                <div class="hang2">`+hocvien.email+`-`+hocvien.sdt+`0905666889</div>
            </div>
        `)
    })
})

$(document).ready(()=>{
    $("#btnRegister").click(()=>{
        socket.emit("hocvien-gui-thongtin",
            {
                hoten:$("#txtHoTen").val(),
                email:$("#txtEmail").val(),
                sdt:$("#txtSDT").val(),                
            })
    })
})