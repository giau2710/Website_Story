let imagelv = [
  "picture/su-tich-hoa-mao-ga.png",
  "picture/su-tich-chim-go-song.jpg",
  "picture/su-tich-con-thach-sung.jpg",
  "picture/su-tich-con-ve-sau.jpg"
]
let imagetk = [
  "picture/an-khe-tra-vang.jpg",
  "picture/nang-tien-oc.jpg",
  "picture/chu-dong-tu-va-cong-chua-tien-dung.jpg"
]
let imagett = [
  "picture/su-tich-trau-cau.jpeg",
  "picture/su-tich-cay-khe.jpg",
  "picture/ai-mua-hanh-toi.jpg"
]
let imageg = [
  "picture/con-quy-va-ba-noi.jpeg",
  "picture/co-be-lo-lem.jpg"
]
let imagea = [
  "picture/a_1776209233_cay-thong.jpg",
  "picture/a_266196125_su-tich-con-than-ma.jpg",
  "picture/a_418946290_cau-be-chan-cuu-va-cay-da-co-thu.jpg"
]
let imagehl = [
  "picture/a_1630397303_vua-midas-vi-hoang-de-tai-lua.jpeg",
  "picture/a_1446176182_athena-va-demeter.jpg"
]
let imagetruyencuoi = [
  "picture/a_2144765488_chuyen-o-lop-hoc.jpg",
  "picture/a_472133079_vay-ma-chang-ai-o-nha-ca.jpg",
  "picture/a_492032468_noi-chuyen-voi-troi.jpg"
]
let imagetruyengngungon = [
  "picture/a_606246469_lua-va-ngua.jpeg",
  "picture/a_1386328371_taiongthatma.jpeg",
  "picture/a_2144139678_nai-va-cho-soi.jpg"
]

function truyencoVN() {

  document.getElementById("cotichTG").value = "chon";
  document.getElementById('jokes').value = "chon";
  document.getElementById("fables").value = "chon";
  let x = document.getElementById("cotichVN").value;
  if (x == "ctlv") {
    showstorylist(imagelv)
  } else if (x == "cttk") {
    showstorylist(imagetk)
  } else if (x == "cttt") {
    showstorylist(imagett)
  }
}
function truyencoTG() {
  document.getElementById('cotichVN').value = "chon";
  document.getElementById('jokes').value = "chon";
  document.getElementById("fables").value = "chon";
  let x = document.getElementById("cotichTG").value;
  if (x == "tcg") {
    showstorylist(imageg)
  } else if (x == "tca") {
    showstorylist(imagea)
  } else if (x == "tthl") {
    showstorylist(imagehl)
  }
}
function showstorylist(arr) {

  let liststory = "<tr>"
  for (let i = 0; i < arr.length; i++) {
    liststory += `<td><img onclick="showstory(${i})" src=${arr[i]}></td>`
  }
  liststory += `</tr>`

  document.getElementById("liststory").innerHTML = liststory;

}
function showstory(index) {
  let cotichvn = document.getElementById("cotichVN").value;
  let truyencuoi = document.getElementById("jokes").value;
  let truyenngungon = document.getElementById("fables").value;
  let cotichtg = document.getElementById("cotichTG").value;
  if (index == 0 && cotichtg == "tcg") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/conquyvabanguoilinh.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 0 && cotichtg == "tca") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/caythongnon.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 0 && cotichtg == "tthl") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/vuamidas.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && cotichtg == "tcg") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/cobelolem.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && cotichtg == "tca") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/conthanma.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && cotichtg == "tthl") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/poseidonvaapollo.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 2 && cotichtg == "tca") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/caubechancuu.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 0 && truyenngungon == "truyenngungon") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/luavangua.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && truyenngungon == "truyenngungon") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/conthanma.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 2 && truyenngungon == "truyenngungon") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/naivachosoi.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 0 && truyencuoi == "truyencuoi") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/chuyenolophoc.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && truyencuoi == "truyencuoi") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/vaymachangaionhaca.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 2 && truyencuoi == "truyencuoi") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/noichuyenvoitroi.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 0 && cotichvn == "ctlv") {
    document.getElementById("liststory").innerHTML = `<embed id="1" src="Story/sutichhoamaoga.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 0 && cotichvn == "cttk") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/ankhetravang.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 0 && cotichvn == "cttt") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/sutichtraucau.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && cotichvn == "ctlv") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/sutichchimgosong.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && cotichvn == "cttk") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/nangtienoc.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 1 && cotichvn == "cttt") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/sutichcaykhe.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 2 && cotichvn == "ctlv") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/sutichconthachsung.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 2 && cotichvn == "cttk") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/chudongtuvacongchuatiendung.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 2 && cotichvn == "cttt") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/aimuahanhgiumtoi.pdf" width="1200" height="800s" type="application/pdf";->`
  }
  if (index == 3 && cotichvn == "ctlv") {
    document.getElementById("liststory").innerHTML = `<embed src="Story/sutichconvesau.pdf" width="1200" height="800s" type="application/pdf";->`
  }
}
function backbtn() {
  if (document.getElementById("cotichVN").value == 'ctlv') {
    showstorylist(imagelv);
  }
  if (document.getElementById("cotichVN").value == 'cttk') {
    showstorylist(imagetk);
  }
  if (document.getElementById("cotichVN").value == 'cttt') {
    showstorylist(imagett);
  }
  if (document.getElementById("jokes").value == 'truyencuoi') {
    showstorylist(imagetruyencuoi);
  }
  if (document.getElementById("fables").value == 'truyenngungon') {
    showstorylist(imagetruyengngungon);
  }
  if (document.getElementById("cotichTG").value == 'tcg') {
    showstorylist(imageg);
  }
  if (document.getElementById("cotichTG").value == 'tca') {
    showstorylist(imagea);
  }
  if (document.getElementById("cotichTG").value == 'tthl') {
    showstorylist(imagehl);
  }
}
function reset() {
  location.reload();
}
function truyencuoi() {
  document.getElementById("cotichVN").value = "chon";
  document.getElementById("fables").value = "chon";
  document.getElementById("cotichTG").value = "chon";
  showstorylist(imagetruyencuoi);
}
function truyenngungon() {
  document.getElementById('cotichVN').value = "chon";
  document.getElementById('jokes').value = "chon";
  document.getElementById("cotichTG").value = "chon";
  showstorylist(imagetruyengngungon);
}

