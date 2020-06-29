# Find-a-Way
### Link : https://nguyenthaitiep.github.io/Find-a-Way/

## I. Giới thiệu
Find Way là trò chơi toán học dành cho học sinh lớp 1, được xây dựng với mục đích phát triển tư duy số đếm của trẻ em khi mới bước chân vào lớp 1.
## II. Công nghệ sử dụng 
- JavaScript
- HTML
- CSS
## III. Cách thay đổi dữ liệu 
- Game có 2 mode : number và character
- Data của game được lưu trữ tại file data/data.js
- Thay đổi data của game bằng cách thay đổi các phần tử trong mảng "game" của json
 + 1 ma trận 10x7 với dữ liệu đầu vào và có chứa các số từ 1 - 20 hoặc 1 chuỗi các từ tiếng anh có nghĩa nối tiếp nhau
 + Xác đinh thuộc tính của các đối tượng  "start" và "end" của game
 + xác định chuỗi (với mode :charater)
- Lưu ý : Dữ liệu game sẽ được lây random trong json đã tạo

- Mode :Number
$ {
$            "mode": "number",
$           "data": [
$               [__, __, __, __, __, __, __],
$               [__, 14, 15, 16, 17, __, __],
$               [__, 13, __, __, 18, 19, 20],
$               [__, 12, 11, __, __, __, __],
$               [__, __, 10, __, __, __, __],
$               [__, __, 09, 08, __, __, __],
$               [__, __, __, 07, __, __, __],
$               [__, __, __, 06, __, __, __],
$               [__, __, __, 05, __, __, __],
$               [01, 02, 03, 04, __, __, __],
$           ],
$           "start": { row: 9, col: 0 },
$           "end": { row: 2, col: 6 }
$       }
        
- Mode : Character 
        ${
        $  "mode": "character",
        $   "data": [
        $       [___, ___, ___, ___, ___, ___, ___],
        $       [___, ___, ___, ___, ___, ___, ___],
        $       [___, ___, ___, ___, ___, ___, ___],
        $       ['G', 'O', 'O', 'D', 'M', 'O', ___],
        $       [___, ___, ___, ___, ___, 'R', ___],
        $       [___, ___, ___, ___, ___, 'N', ___],
        $       [___, ___, ___, ___, ___, 'I', ___],
        $       [___, ___, ___, ___, ___, 'N', 'G'],
        $       [___, ___, ___, ___, ___, ___, ___],
        $       [___, ___, ___, ___, ___, ___, ___],
        $   ],
        $   "start": { row: 3, col: 0 },
        $   "end": { row: 7, col: 6 },
        $   "result": "Good Morning"
        $ } 
- Lưu ý
### IV. Cách sử dụng 
- git clone https://github.com/NguyenThaiTiep/Find-a-Way.git
- mở file index.html


