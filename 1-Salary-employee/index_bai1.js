

function tinhLuong() {
    var luongNgay = document.getElementById("luong-1ngay").value * 1;
    var soNgay = document.getElementById("txt-ngay-lam").value * 1;
    console.log({luongNgay, soNgay});
    var result = luongNgay * soNgay
    document.getElementById("result").innerHTML = 
    ` <h2> Your salary: ${result} VND </h2>`;
}