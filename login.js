// Kiểm tra xem có dữ liệu người dùng đã lưu không
let users = JSON.parse(localStorage.getItem('users')) || [];

// Xử lý sự kiện đăng nhập
if (document.getElementById('loginButton')) {
    document.getElementById('loginButton').addEventListener('click', function() {
        const usernameInput = document.getElementById('loginForm').querySelector('input[type="text"]').value;
        const passwordInput = document.getElementById('loginForm').querySelector('input[type="password"]').value;

        // Kiểm tra mật khẩu có đủ 8 ký tự không
        if (passwordInput.length < 8) {
            alert('Mật khẩu phải có ít nhất 8 ký tự!');
            return;
        }

        const user = users.find(user => user.username === usernameInput && user.password === passwordInput);
        
        if (user) {
            alert('Đăng nhập thành công!');
            window.location.href = 'index.html'; // Chuyển hướng đến trang chat
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    });
}

// Xử lý sự kiện đăng ký
if (document.getElementById('registerButton')) {
    document.getElementById('registerButton').addEventListener('click', function() {
        const usernameInput = document.getElementById('registerForm').querySelector('input[type="text"]').value;
        const passwordInput = document.getElementById('registerForm').querySelector('input[type="password"]').value;

        // Kiểm tra mật khẩu có đủ 8 ký tự không
        if (passwordInput.length < 8) {
            alert('Mật khẩu phải có ít nhất 8 ký tự!');
            return;
        }

        // Kiểm tra xem tên đăng nhập đã tồn tại chưa
        const existingUser = users.find(user => user.username === usernameInput);
        
        if (existingUser) {
            alert('Tên đăng nhập đã tồn tại!');
        } else {
            // Thêm người dùng mới vào danh sách và lưu vào Local Storage
            users.push({ username: usernameInput, password: passwordInput });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Đăng ký thành công!');
            window.location.href = 'login.html'; // Chuyển hướng về form đăng nhập
        }
    });
}



document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (giả định)
    if (username && password) {
        // Lưu tên người dùng vào localStorage
        localStorage.setItem('username', username);

        // Chuyển hướng đến trang chủ
        window.location.href = 'index.html'; // Đảm bảo bạn có file homepage.html

    } else {
        alert('Vui lòng nhập đủ thông tin!');
    }
});