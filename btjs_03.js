// Cau 1 : 
// var soNguyenDuong = (number) => {
//     if (isNaN(number)){
//         return false;
//     }
//     if ((number > 0) && (number % 1 == 0)){
//         return true;
//     }
//     else {return false;}
// }

// var number = prompt("Nhap vao so can kiem tra: ");

// if (soNguyenDuong(number)){
//     alert("Yes");
// }
// else {
//     alert("NO");
// }


// Câu 02: Kiểm tra có phải là một hình?

// var  check = (n, array) => {
//     if ( n < 3){
//         return false;
//     }

//     if (n != array.length){
//         return false;
//     }

//     // tong cac goc phai bang (n-2) * 180; dung ham reuduce 
//     var sum = array.reduce((result, item) => {
//         return result + item;
//     }, 0);

//     // kiem tra xem cac phan tu cua mang cos am hay khong 
//     var checkAm = array.some((item, index) => {
//         return item < 0;
//         // ham some chỉ cần 1 đối tượng thoả mãn là sẽ trả về true;
//     })
//     if (checkAm) {
//         return false;
//     }

//     if (sum != (n - 2) * 180){
//         return false
//     }
//     else {
//         return true;
//     }
// }
// console.log(check(4, [180, 90 , 90, -90]))

// Câu 03: Viết tắt câu

// var abbreviate = (string, n = 0) =>{
//     var arr_char = string.split(" ");
//     var arr_result = [];
//     // cach 1
//     // for (let index of arr_char){
//     //     if (index.length >= n){
//     //         arr_result.push(index[0].toUpperCase())
//     //     }
//     // }

//     // cach 2
//     for (let i in arr_char){
//         if (arr_char[i].length >= n){
//             arr_result.push(arr_char[i][0].toUpperCase())
//         }
//     }
//     return arr_result.join("");
// }

// console.log(abbreviate("Xin chào! Tôi tên là Nam.", 4))

// Câu 04: AlTeRnAtInG cApS (Thay đổi viết hoa, viết thường)
// "Khá Bảnh" —> "KhÁ bẢnH"

// vị trí index chẵn thì in hoa, index lẻ thì in thường

// const changeString = (string) => {

//     let counter = 0;
//     let arr_char = string.split("");
    
//     let new_arr = arr_char.map((item, index) =>  {
//         counter++;
//         if (item == " "){
//             return item;
//         }
//         if (counter % 2){
//             return item.toUpperCase();
//         }
//         else {
//             return item.toLowerCase();
//         }

//         // toan tu 3 ngoi
//         // counter++;
//         // return (counter % 2) ? item.toUpperCase(): item.toLowerCase();
        
//     })

//     return new_arr.join("");
// }

// const test1 = changeString("Khá Bảnh");
// console.log(test1); // KhÁ bẢnH

// Câu 05: Thống kê cơ bản: Trung vị


// var median = (array) => {
//     if (array.length % 2) {
//         // neu mang le
//         // 5 phần tử thì in ra index thứ 2
//         return array[(array.length-1) / 2];
//     }
//     else{
//         // 4 phan tu thì in ra index 1 và 2 
//         return ((array[array.length / 2] + array[array.length / 2 - 1])/2).toFixed(1);
//     }
// }


// // console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10, 12 ,14]));
// console.log(median([2, 2, 6, 8, 8, 10, 10]))

// Câu 06: Bánh sinh nhật
// const getBirthdayCake = (name, age) => {
//     const char = (age % 2)? "*":"#";

//     const middle = `${char} ${age} Chúc mừng sinh nhật ${name}! ${age} ${char}`;
//     const adge = char.repeat(middle.length);

//     return `
//         ${adge}
//         ${middle}
//         ${adge}
//     `
// }

// const test1 = getBirthdayCake("Minh", 20);
// console.log(test1);


// var fullName = prompt("Nhap vao ten cua ban: ");
// // console.log(`${fullName}`);
// const name_repeat = fullName.repeat(12);
// console.log(name_repeat);

// Câu 07: Blah, Blah, Blah…

// const blahBlah = (string, number) => {
//     if ((number < 0) || (isNaN(number))){
//         return;
//     }

//     const arr_word = string.split(" ");
//     if ( number >= arr_word.length){
//         const new_arr = arr_word.map((item, index) => {
//             return "blah";
//         })
//         return new_arr.join(" ");
//     }
//     else {
//         const new_arr = arr_word.map((item, index) => {
//             return (number > arr_word.length - index - 1)? "blab" : item;
//         })
//         const newString = new_arr.join(" ");
//         return `${newString}...`
//     }
    
// }

// console.log(blahBlah("Anh học CNTT hả, cài win dùm em nhé!",3))


// const blahBlah = (string, number) => {
//     const words = string.split(" ");

//     const new_arr = words.map((item, index) => {
//         return (number > words.length - index - 1)? "blah":item;
//     })

//     const newString = new_arr.join(" ");
//     return `${newString}...`;
// }

// const test1 = blahBlah("hi em, anh ten Minh", 2 );
// console.log(test1);

// "hi em, anh ten Minh", 2 
// length = 5 , phải đến chữ ten mới được đổi, tức 2 > 5(chieu dai cua mang sau tach) - 3(index của ten) - 1

// Câu 08: Tính tổng đơn hàng

const getTotalPrice = (array) => {
    // dung ham reduce : trả về 1 kết quả cuối cùng

    var sum = array.reduce((result, item, index) => {
        return result + item.price * item.quantity;
    },0)
    return sum;
}

// const test1 = getTotalPrice([
// 	{ product: "Sữa", quantity: 1, price: 7000 }
// ]);
// console.log(test1); // 7000


// const test2 = getTotalPrice([
//     { product: "Sữa", quantity: 1, price: 7000 },
//     { product: "Ngũ cốc", quantity: 1, price: 50000 },
//   ]);
//   console.log(test2); // 57000

// const test3 = getTotalPrice([
// 	{ product: "Sữa", quantity: 3, price: 7000 }
// ]);
// console.log(test3); // 21000

// const test4 = getTotalPrice([
//     { product: "Sữa", quantity: 1, price: 7000 },
//     { product: "Trứng", quantity: 12, price: 3000 },
//     { product: "Bánh mỳ", quantity: 2, price: 15000 },
//     { product: "Phô mai", quantity: 1, price: 5000 },
//   ]);
//   console.log(test4);
  
// Câu 09: Viết hoa chữ cái đầu tiên của mỗi từ
// tách các ra thành mảng words
// dùng hàm forEach(), thao tác trực tiếp lên mảng đó
// trong hàm map thực hiện lấy ra chữ cái đầu của mỗi tù và .toUpperCase()


// const capitalize = (string) => {
//     return string.slice(0,1).toUpperCase() + string.slice(1);
// }

// // Cách viết tắt
// // const makeTitle = (string) => {
// //     return string.split(" ").map(capitalize).join(" ");
// // }

// const makeTitle = (string) => {
//     words = string.split(" ");
//     new_arr = words.map((word, index) => {
//         return capitalize(word);
//     })
//     return new_arr.join(" ");
// }

// // const test1 = makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// // console.log(test1);

// const test2 = makeTitle("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.");
// console.log(test2);

// Câu 10: Chọn cầu chì
// trong danh sách mảng và 1 số cho trước , chọn số lớn hơn và gần số cho trước đayas nhất 

// Câu 06: Bánh sinh nhật

/*
  ##################################
  # 18 Chúc mừng sinh nhật Nam! 18 #
  ##################################
*/


// const getChar = (age) => {
//     var char = (age % 2)? "*" : "#" ;
//     return char;
// }

// const getBirthdayCake = (name, age) => {
//     var char = getChar(age);
//     var middle = `${char} ${age} Chúc mừng sinh nhật ${name}! ${age} ${char}`
//     var edg = char.repeat(middle.length);

// return `
//     ${edg}
//     ${middle}
//     ${edg}`
// }

// const test1 = getBirthdayCake("Minh", 20);
// console.log(test1);

// Câu 07: Blah, Blah, Blah…
// Đề bài:
// Tạo một hàm thay thế n từ cuối cùng bằng "blah". Thêm "..." vào "blah" cuối cùng. 
// Nếu n dài hơn số từ trong câu, hãy thay tất cả các từ bằng "blah"
// Tất cả các từ "blah" sẽ là chữ thường!

// tách chuỗi thành 1 mảng (split(" "))
// dùng hàm map để trả về một mảng mới 
// ví dụ : "Chào em, anh tên Minh", n = 2; thì phải thay thế từ chữ "tên";
// chữ tên có index = 3; => công thúc: n = 2 > 5(length) - 3(index) - 1: thì mới được thay, nếu khong thì vẫn trả về từ của mảng


// const changeWords = (string, number) => {
//     const words = string.split(" ");
//     // ham map tra ve 1 ham moi nen can co 1 bien de nhan ham moi
//     const new_array = words.map((word, index) => {
//         return (number > words.length - index - 1)? "blah":word;
//     })
//     var new_string = new_array.join(" ");
//     return `${new_string}...`
// }

// const test1 = changeWords("Chào em, anh tên Minh", n = 7)
// console.log(test1);

// Câu 09: Viết hoa chữ cái đầu tiên của mỗi từ
// đầu vào là 1 string, tách thành 1 mảng các từ 
    // cần 1 hàm riêng để xử lí cho từng từ 
    // hàm riêng nhận đàu vào là 1 từ viết hoa chữ cái đầu :  string.slice(0,1).toUpperCase() + string.slice(1);
// sau khi xử lí xong, join lại và trả vè kết quả 
// dùng hàm map để xử lí 

// const changeWord = (string) => {
//     return string.slice(0,1).toUpperCase() + string.slice(1);
// }

// // console.log(changeWord("minh")); // ngon 
// var changeString = (string) => {
//     var arr_word = string.split(" ");
//     var new_array = arr_word.map((word, index) => {
//         return changeWord(word);
//     })
//     const new_string = new_array.join(" ");
//     return new_string;
// }

// const test1 = changeString("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// console.log(test1);
 

// Câu 12: Swap Cases (Đảo ngược viết hoa, viết thường)
// Đề bài:
// Viết hàm swappingCases(string) truyền vào một string bất kỳ, đảo ngược cách viết hoa, viết thường của các chữ cái.
// Ví dụ: 
// "Le VAn HunG" —> "lE vaN hUNg"
// "Đặng PhưƠnG NAm" —> "đẶNG pHƯơNg naM"

// vẫn dùng hàm map
// tách chuỗi ra thanh tưngf chũ cái, duyệt kiểm tra từng index
// return (item === item.toUpperCase()) ? item.toLowesCase : item.toUpperCase() ;
// join mảng lại và return ra string;


// const swappingCases = (string) => {
//     const arr_char = string.split("");
//     var new_arr = arr_char.map((key, index) => {
//         return (key === key.toUpperCase())?  key.toLowerCase() : key.toUpperCase();
//     })
//     const new_string = new_arr.join("");
//     return new_string;
// }

// const test1 = swappingCases("đẶNG pHƯơNg naM");
// console.log(test1);

// const test2 = swappingCases("minh nguyen");
// console.log(test2);


// Câu 13: Inverted Numbers (Đảo ngược giá trị của số)

// Đề bài:
// Viêt hàm invertedNumbers(array) truyền vào một mảng có các phần tử là các số bất kỳ, 
// hãy đảo ngược giá trị từ âm sang dương, hoặc từ dương sang âm của các số trong mảng đó.
// Ví dụ: 
// [1, -10, -20, 15, 100, -30] —> [-1, 10, 20, -15, -100, 30]
// [-20, 30, 10, -25, -60, 20] —> [20, -30, -10, 25, 60, -20]

// vẫn dùng hàm map
// duyệt qua từng phần tử của mảng, làm tương tự như bài đảo ngược kí tự

// const invertedNumbers = (array) => {
//     var new_arr = array.map((item, index) => {
//         return (-1 * item);
//     })
//     return new_arr;
// }
// const test1 = [1, -10, -20, 15, 100, -30];
// console.log(invertedNumbers(test1));


// const test2 = [-20, 30, 10, -25, -60, 20];
// console.log(invertedNumbers(test2));


// Câu 14: Ignore Number Value (Bỏ qua các chữ số)
// Đề bài:
// Viết hàm ignoreNumbers(string) truyền vào một string bao gồm cả số và chữ, hãy trả về một string mới chỉ gồm chữ.
// Ví dụ: 
// "Test4Ag54SF" —> "TestAgSF"
// "JHk34Gl3gG" —> "JHkGlgG"

// Dùng hàm filter : trả về một mảng các phần tử tìm được 
// trả về các phần tử không phải là số => dùng hàm isNaN(key)
// xong thì join lại và trả về kết quả 

// const ignoreNumbers = (string) => {
//     var arr_char = string.split("");
//     var arr_result =  arr_char.filter((item, index) => {
//         if (isNaN(item)) {
//             return item;
//         }
//     })
//     var new_string = arr_result.join("");
//     return new_string;
// }

// const test1 = ignoreNumbers("JHk34Gl3gG");
// console.log(test1);
// // ok 

// cách viết tắt/ vì hàm trả về 1 string nên 

// const ignoreNumbers = (string) => {
//     const newString =  string
//         .split("")
//         .map((item) => (isNaN(item))? item:"")
//         .join("");
//     return newString;
// }
// const test1 = ignoreNumbers("JHk34Gl3gG");
// console.log(test1);

// Câu 15: Tìm từ ≤ n ký tự
// Đề bài:
// Viết hàm smallWords(string, number) truyền vào một string và một số number. Trả ra một string mới chỉ gồm những từ ≤ number.
// Ví dụ: 
// smallWords("I Love Foood Code Too Playing Much", 4) —> "I Love Code Too Much".
// smallWords("I Love Foood Code Too Playing Much", 3) —> "I Too"

// dùng hàm filter để tra về mảng kết quả tìmd được phù hợp với điều kiện so sánh
// phân tachs string thành mảng các từ
// tạo một mảng mói nhận giá trị hàm filter trả về
// trong hàm filtẻr : return (item.length <= number)? item:"";
// join lại và trả về kết quả 

// const smallWords = (string, number) => {
//     var arr_word = string.split(" ");
//     var arr_result = arr_word.filter((word) => {
//         return (word.length <= number)? word:"" ;
//     })
//     var newString = arr_result.join(" ");
//     return newString;
// }

// const test1 = "I Love Foood Code Too Playing Much";
// console.log(smallWords(test1, 4));
// // Trả về: I Love Code Too Much

// const test2 = "I Love Foood Code Too Playing Much";
// console.log(smallWords(test2, 3));
// // Trả về: I Too

// cách viết tắt 
// const smallWords = (string, number) => {
//     var newString = string
//         .split(" ")
//         .filter((word) => word.length <= number)
//         .join(" ");
//     return newString;
// }
// const test2 = "I Love Foood Code Too Playing Much";
// console.log(smallWords(test2, 3));
// Trả về: I Too


// Câu 16: Tìm số trong String và Nhân
// Đề bài:
// Viết hàm multiplyNumberInString(string), truyền vào một string, hãy trả ra một string mới là phép nhân của các số có trong string đó.
// Ví dụ: 
// "JG23BGH5BA" —> "4925" 
// 2*2 = 4
// 3*3 = 9
// 5*5 = 25
// —> "4925"

// tìm số: dùng hàm filter
// mỗi số tìm được cho vào mảng, rồi có thể dùng hàm reduce 

// const multiplyNumberInString = (string) => {
//     const arr_number = string
//         .split("")
//         .filter((char) => (!isNaN(char)))
//     // mang arr_number gom các số 
//     // dùng hàm map, tạo ra mảng mới, thay đổi mảng này bằng cách return ra bình phương
    
//     if (arr_number.length == 0){return "0";}

//     const string_result = arr_number
//         .map((number) => number ** 2)
//         .join("");
//     return string_result;
// }

// const test1 = "JG23BGH5BA";
// console.log(multiplyNumberInString(test1)); // "4925"

// const test2 = "VD23GS8S6AH";
// console.log(multiplyNumberInString(test2)); // "496436"

// const test3 = "AGD353GDSK8";
// console.log(multiplyNumberInString(test3)); // "925964"

// const test4 = "JBKJJKLDJ";
// console.log(multiplyNumberInString(test4)); // "0"


// var char = "2";
// console.log(isNaN(char)); // false: tức kiểm tra xem có phải là not a number không nhưng kq là !(khong phải la số ) => có là số 
// console.log((char ** 2));
// console.log(typeof char);

// Cách 2 : viết tắt
// vì hàm trả về 1 string, nên mình sẽ gộp cả 2 hàm bên trên vào

// const multiplyNumberInString = (string) =>{
//     var string_result = string
//         .split("")
//         .filter((char) => (!isNaN(char))) // lay ra cac so
//         .map((number) => number ** 2) // binh phuong cac so cho ket qua sang mang moi, phan tu van la kieu du lieu string
//         .join("") // noi lai voi nhau
//     return (string_result.length > 0)? string_result : "0";
// }

// const test4 = "JBKJJKLDJ";
// console.log(multiplyNumberInString(test4)); // "0"

// const test3 = "AGD353GDSK8";
// console.log(multiplyNumberInString(test3)); // "925964"

// Câu 17: Tính tổng tiền trong giỏ hàng
// Đề bài:
// Cho một mảng giỏ hàng chứa các sản phẩm (bao gồm tên, giá, số lượng). Hãy tính tổng tiền của giỏ hàng đó.
// Ví dụ:
// const cart = [
//   { name: "iPhone", price: 1000, quantity: 5 },
//   { name: "iPad", price: 500, quantity: 2 },
//   { name: "MacBook", price: 2000, quantity: 1 },
// ];

// // Tính toán để trả về: 1000 * 5 + 500 * 2 + 2000 * 1 = 8000

// dùng hàm reduce() để trả về giá trị cuối cùng của hàm

// const tinhTien = (array) => {
//     const sum = array.reduce((total, item) => {
//         return total + item.quantity * item.price;
//     }, 0)
//     return sum;
// }

// const cart = [
//     { name: "iPhone", price: 1000, quantity: 5 },
//     { name: "iPad", price: 500, quantity: 2 },
//     { name: "MacBook", price: 2000, quantity: 1 },
//   ];
// console.log(tinhTien(cart));  

// Câu 18: Nhóm các học sinh trong một lớp theo giới tính
// Đề bài:
// Cho một mảng danh sách các học sinh của một lớp. Hãy nhóm các học sinh Nam thành 1 nhóm, học sinh Nữ thành 1 nhóm.

//  đầu vào là 1 mảng các object" => dùng hàm reduce 

const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
  ];
  

const groupeStudents = students.reduce((groups, item) => {
    if (groups[item.gioiTinh]){
        groups[item.gioiTinh].push(item.hoTen);
    }else{
        groups[item.gioiTinh] = [item.hoTen];
    }
    return groups;
}, {})

console.log(groupeStudents);

