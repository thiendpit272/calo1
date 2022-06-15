const cannang = document.querySelector("#cannang");
const chieucao = document.querySelector("#chieucao");
const tuoi = document.querySelector("#tuoi");
const gioitinh = document.querySelector("#gioitinh");
const ketqua = document.querySelector(".ketqua");
const nhom1 = document.querySelector(".nhom1");
const nhom2 = document.querySelector(".nhom2");
const nhom3 = document.querySelector(".nhom3");
const nhom4 = document.querySelector(".nhom4");

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  let BMR;

  if (gioitinh.value === "Nam") {
    BMR =
      9.99 * Number(cannang.value) +
      6.25 * Number(chieucao.value) -
      4.92 * Number(tuoi.value) +
      5;
    ketqua.innerHTML = `BMR = ${BMR}`;
    nhom1.innerHTML = `Nhóm 1: Ít vận động hoặc không vận động - ${
      (BMR * 1, 2)
    } calo`;
    nhom2.innerHTML = `Nhóm 2: Vận động nhẹ: 1-2 lần / 1 tuần - ${
      (BMR * 1, 3)
    } calo`;
    nhom3.innerHTML = `Nhóm 3: Vận động vừa phải: 3-5 lần / 1 tuần - ${
      (BMR * 1, 55)
    } calo`;
    nhom4.innerHTML = `Nhóm 4: Vận động nhiều: 5-6 lần / 1 tuần - ${
      (BMR * 1, 725)
    } calo`;
  } else {
    BMR =
      9.99 * Number(cannang.value) +
      6.25 * Number(chieucao.value) -
      4.92 * Number(tuoi.value) -
      161;

    ketqua.innerHTML = `BMR = ${BMR}`;
    nhom1.innerHTML = `Nhóm 1: Ít vận động hoặc không vận động - ${
      (BMR * 1, 2)
    } calo`;
    nhom2.innerHTML = `Nhóm 2: Vận động nhẹ: 1-2 lần / 1 tuần - ${
      (BMR * 1, 3)
    } calo`;
    nhom3.innerHTML = `Nhóm 3: Vận động vừa phải: 3-5 lần / 1 tuần - ${
      (BMR * 1, 55)
    } calo`;
    nhom4.innerHTML = "";
  }
});
