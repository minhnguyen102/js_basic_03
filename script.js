// Hàm trong js có 2 loại : Hàm built_in và hàm tự định nghĩa 
// Trong hàm tự định nghĩa lại có 3 loại hàm: 

// Loại 1 : Declaration function (Hàm định nghĩa)
// có tính hosting (nghĩa là được gọi hàm trước khi khai báo)
// có đối tượng argument :  truyền vào bao nhiêu đối số thì arguments sẽ tạo ra 1 mảng nhận tưng ấy dối số

// var ketQua = Tong(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
// // truyền vào 10 đối só thì arguments sẽ nhận 1 mảng gồm 10 dối só
// console.log(ketQua)

// function Tong() {
//     let tong = 0;

//     for (const item of arguments){
//         tong += item;
//     }
//     return tong;
// }


// Loại 2 : Expression function (Hàm biểu thức)
// Không có tính hosting : không được gọi hàm khi chưa được khai báo
// có đối tượng arguments

// var Tong = function() {
//     let tong = 0;
//     for (items of arguments){
//         tong += items;
//     }
//     return tong;
// }

// var ketQua = Tong(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
// console.log(ketQua)


// Loại 3 : Arrow function (Hàm mũi tên)
// khong có tính hoistng (nếu gọi hàm trước sẽ bị lỗi)
// khong có đối tượng arguments

// var tong = (...arguments) => {
//     let tong = 0;
//     for (const item of arguments){
//         tong += item;
//     }

//     return tong;
// }

// var ketQua = tong(10, 20, 30, 40);
// console.log(ketQua);

// setTimeout(function() {
//     console.log("Ok")
// }, 3000) 
// viết theo kiểu thường 

// setTimeout(() => {
//     console.log("OK")
// }, 3000) 
// viét theo kiểu arrow function 


// var tinhTong = (array) => {
//     let tong = 0;
//     for (const item of array){
//         tong += item;
//     }
//     return tong;
// }

// var mang = [10, 20, 30, 40];
// var result = tinhTong(mang);
// console.log(result);


// var tinhTong_2 = (n) => {
//     let tong = 0;
//     for (let i = 1; i <= n; i++){
//         tong += i/n;
//     }
//     return tong;
// }



// let n;
// do {
//     n = parseInt(prompt("Nhap n : "));
//     if (n <= 0){
//         console.log("Vui long nhap so n lon hon 0")
//     }else{
//         console.log(tinhTong_2(n));
//     }
// } while (n <= 0);

// 2. Try catch 

/*
    try {
        chạy vào đây đầu tiên
    } catch(error){
        nếu có lỗi thì in ra lỗi  
    } finally {
        luôn chạy vào đây và chạy sau cùng 
    }
*/

    // var n = 10;
    // try {
    //     if (n >= 5){
    //         console.log("Chuong trinh chay binh thong");
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
    // finally{
    //     console.log("Đoạn mã của chương trình khác")
    // }

    // console.log("Đoạn mã của chương trình khác-2")


// 3. Làm việc với object nâng cao
    // 3.1 : thêm key vào trong object
    // var infoUser = {
    //     name : "Minh Nguyen",
    // }
    // // cach 1
    // infoUser.phone = "0123456789";
    // // console.log(infoUser);
    // // cach 2
    // infoUser["mail"] = "minhnguyen102@gmail.com";
    // // console.log(infoUser);

    // var address = "address";
    // infoUser[address] = "Thai Binh";
    // // console.log(infoUser);

    // infoUser.password = "123456";
    // console.log(infoUser);

    // // xóa 1 key đi khỏi object 
    // // bài toán: trả data về cho user, mình khong nên trả lại password. đó là ví dụ 

    // delete infoUser.password;
    // console.log(infoUser);

// 4 : làm việc với array nâng cao
// 4.1. forEach() : duyệt qua từng phần tử và thực hiện 1 hành động gì đó, trực tiếp thay đổi mảng hiện tại 
// arr.forEach(function (currentValue, index, array){code xử lý})

// var array = [1, 2, 3, 4];
// array.forEach((item, index, arrayOrigin) => {
//     console.log(item); // là các phần tử trong mảng 
//     console.log(index); // là vị trí index tương ứng với các phần tủ
//     console.log(arrayOrigin); // là mảng gốc
//     console.log("------------------------");
// });
// các tham số item, index , array là mặc định theo đúng thứ tự truyền vào 
// // vd vè hàm tính tổng
// let tong = 0;
// array.forEach((item) => {
//     tong += item;
// });
// console.log(tong);

// vd về chương trình cộng các số trong mảng lên 2 đơn vị

// array.forEach( (_,index) => {
//     array[index] += 2;
// })
// // _ là thể hiện tham số khong dùng dến, nếu không thì phải ghi là item rồi mới đến index, nếu để index đầu thì index được hệ thống xem là tham số item
// console.log(array);


// 4.2 every() : kiểm tra tất cả các phần tử của mảng có thỏa mãn 1 điều kiện gì đó không 
// chỉ trả ra giá trị: true or false 

const diemThi = [
    {
        mon : "Toan",
        diem : 9.7
    },
    {
        mon : "Hoa",
        diem : 9.7
    },
    {
        mon : "Anh",
        diem : 9.7
    },
    {
        mon : "Van",
        diem : 3.7
    },
    {
        mon : "Toan",
        diem : 7.7
    },
]

// console.log(diemThi)

// const hocSinhGioi = diemThi.every((item, index, array) => {
//     return item.diem > 9;
// })
// // vì hàm chỉ trả ra true false nên phải dùng return

// console.log(hocSinhGioi);

// 4.3 some() : kiểm tra trong mảng chỉ cần thỏa mãn 1 phần tư là được 
// cũng chỉ giả vể 2 giá trị true và false
// every() <=> && ; some() <=> ||
// kiểm tra diemThi nếu có 1 môn dưới 4 thì sẽ phải học lại 

// var check = diemThi.some((item, index, array) =>{
//     return item.diem < 4;
// } )

// if (check) {
//     console.log("Bạn phải học lại");
// } else {
//     console.log("Bạn khong phải học lại");
// }

// 4.4 Find() : tim xem trong mảng có giá trị nào giống với giá trị cần tìm hay khong, nếu có thì trả về vị trí , nếu không có thì trả về undefined
// chỉ trả về phần tử đầu tiên nếu trong trường hợp có từ 2 phần tử trở lên trong mảng thỏa mãn điều kiện 

// const monTin = diemThi.find((item, index, array) => {
//     return item.mon === "Tin";
// })

// console.log(monTin); // undefined

// const monToan = diemThi.find((item, index, array) => {
//     return item.mon === "Toan";
// })

// console.log(monToan); // trả ra object môn toán 
// console.log(monToan.diem); // trả ra điểm 


// 4.5 filter() : trả về một mảng các phần tử tìm đưoc (phát triển của hàm find())
    
    // const monToan = diemThi.filter((item, index, array) => {
    //     return item.mon === "Toan";
    // })

    // console.log(monToan);

//  4.6 map()
// thao tác trên dữ liệu của mảng nhưng kết quả lại được sao chép sang mảng mới, không ảnh hưởng đến mảng cũ
// phần tử trong mảng mới phụ thuộc vào giá trị return (return gì thì nhận giá trị đấy)
// số phần tử trong mảng mới bằng số phần tử trong mảng cũ
    // console.log(diemThi);

    // const mangMoi = diemThi.map((item, index, array) => {
    //     return item.diem;
    // })

    // console.log(mangMoi); // 0  1 2 3 4

// so sánh map() và forEach();

// diemThi.forEach((item, index, array) => {
//     if (item.mon == "Van"){
//         item.diem = 10;
//     }
// })

// console.log(diemThi)

// const diemThiMoi = diemThi.map((item, index, array) => {
//     if (item.mon == "Van"){
//         item.diem = 10;
//     }
//     return item;
// })

// console.log(diemThiMoi)



    
