document.getElementById("btnsoNguyenTo").onclick = function(){
    //Đầu vào
    var soA = document.getElementById("soA").value;
    //Thực hiện bước nhảy và kiểm tra
    var kq = "";
    for(var i = 1; i < soA; i++){
        var count = 0;
        for(var j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                count++;
            }
        }
        if(count === 0 && i > 1){
            kq += " " + i;
        }
    }
    //Xuất kết quả
    document.getElementById("footersoNguyenTo").innerHTML = kq;
}