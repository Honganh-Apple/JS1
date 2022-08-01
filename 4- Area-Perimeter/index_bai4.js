/* 
input: nhap do dai chieu rong, chieu dai
todo: 
- chu vi: lay tong chieu dai + rong *2
- dien tiech: chieu dai x chieu rong
output: hien thi chu vi va dien tich
*/

function tinhChuVi() {
    var chieuDai = document.getElementById("txt-chieu-dai").value * 1;
    var chieuRong = document.getElementById("txt-chieu-rong").value * 1;
    console.log({chieuDai, chieuRong});
    var result = (chieuDai + chieuRong) * 2
    document.getElementById("result_chuvi").innerHTML = 
    ` <h2> The perimeter of the rectangle is: ${result} </h2>`;
}

function tinhDienTich() {
    var chieuDai = document.getElementById("txt-chieu-dai").value * 1;
    var chieuRong = document.getElementById("txt-chieu-rong").value * 1;
    console.log({chieuDai, chieuRong});
    var result = chieuDai * chieuRong
    document.getElementById("result_dientich").innerHTML = 
    ` <h2> The area of the rectangle is: ${result} </h2>`;
}