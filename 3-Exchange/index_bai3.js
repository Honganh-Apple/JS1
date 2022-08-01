/* 
input: nhap so tien USD muon quy doi
todo: lay so tien USD nhan voi gia USD 23500
output: gia tien quy doi ra vnd
*/

function tinhUsd() {
    var giaUsd = document.getElementById("gia-usd").value * 1;
    var soTien = document.getElementById("txt-nhap-tien").value * 1;
    console.log({giaUsd, soTien});
    var result = giaUsd * soTien
    document.getElementById("result").innerHTML = 
    ` <h2> The amount converte to VND is: ${result} VND </h2>`;
}