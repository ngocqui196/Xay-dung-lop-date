// Tham số : day, month, year.
// 3-27 Khai báo lớp myDate. trong javascript không có từ khóa cụ thể để khaibaso lóp nên phải dùng từ khóa funtion để khai báo.
let myDate = function (day, month, year) {
    // Thuộc tính là tính chất
    this.day = day; // Gán tham số màu trắng "day"  vào thuộc tính màu tím "day"
    this.month = month;
    this.year = year;

    this.getDay = function () {    //Phương thức getDay trả về thuộc tính của ngày "day" trong lớp "myDate"
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    }
};
let date = new myDate(90 ,60, 90); //Tạo ra đối tượng date có các tham số
let day = date.getDay();  // Lấy tham số thuộc tính "day" của đối tượng "date"
let month = date.getMonth(); //lấy tham số của thuộc tính "month" của đối tượng "date"
let year = date.getYear();
alert(day + '/' + month + '/' + year);


date.setDay(95); //Sửa lại thuộc tính "day" của đối tượng của 'date'
date.setMonth(52);
date.setYear(96);
day = date.getDay(); // Khai bá
month = date.getMonth();
year = date.getYear();
alert(day + "/" + month + "/" + year);