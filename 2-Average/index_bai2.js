


function tinhTrungBinh() {
    var soThuNhat = document.getElementById("txt-thu-nhat").value * 1;
    var soThuHai = document.getElementById("txt-thu-hai").value * 1;
    var soThuBa = document.getElementById("txt-thu-ba").value * 1;
    var soThuTu = document.getElementById("txt-thu-tu").value * 1;
    var soThuNam = document.getElementById("txt-thu-nam").value * 1;
    console.log({soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam});
    var result = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5
    document.getElementById("result").innerHTML = 
    ` <h2> Average: ${result} </h2>`;
}

