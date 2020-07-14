// Tham số : day, month, year.
// 3-27 Khai báo lớp myDate. trong javascript không có từ khóa cụ thể để khai báo lóp nên phải dùng từ khóa funtion để khai báo.
let MyDate = function (day, month, year) {
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
let date = new MyDate(15 ,3, 1990); //Tạo ra đối tượng date thuộc lớp MyDate và truyền  vào các giá trị tương ứng với từng thuộc tính
let day = date.getDay();  // Lấy tham số thuộc tính "day" của đối tượng "date"
let month = date.getMonth(); //lấy tham số của thuộc tính "month" của đối tượng "date"
let year = date.getYear();    // Lấy tham số của thuộc tính "year" của đối tượng "date"
alert(day + '/' + month + '/' + year);


date.setDay(10); //Sửa lại thuộc tính "day" của đối tượng của 'date'
date.setMonth(10);
date.setYear(2019);
day = date.getDay(); // Nhận giá trị của thuộc tính "this.day" vừa sửa và gán cho nó vào biến "day"
month = date.getMonth();
year = date.getYear();
alert(day + "/" + month + "/" + year);
