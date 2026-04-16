function kiemTraForm(event) {
    // Khong dong form khi thong bao alert
    event.preventDefault();

    // Kiểm tra Họ tên (Full Name)
    let valFullName = document.getElementById("fullName").value.trim();

    // Tách tên thành các từ dựa trên khoảng trắng
    let words = valFullName.split(/\s+/);

    // Viết hoa + chỉ chữ cái (Unicode)
    let regexUpper = /^\p{Lu}\p{Ll}*(\s\p{Lu}\p{Ll}*)*$/u;

    if (!valFullName) {
        alert("Họ tên không được để trống!");
        document.getElementById("fullName").focus();
        return false;
    }
    if (words.length < 2) {
        alert("Vui lòng nhập đầy đủ cả Họ và Tên!");
        document.getElementById("fullName").focus();
        return false;
    }
    if (!regexUpper.test(valFullName)) {
        alert("Họ tên phải viết hoa đầu mỗi từ và không chứa ký tự đặc biệt!");
        document.getElementById("fullName").focus();
        return false;
    }
    // Check độ dài từng từ
    for (let word of words) {
        if (word.length < 2) {
            alert(`"${word}" phải có ít nhất 2 ký tự!`);
            return false;
        }
    }

    // Kiểm tra Số điện thoại
    let valSodt = document.getElementById("phoneNumber").value.trim();
    let regexSodt = /^(0)\d{9}$/;
    if (valSodt === "" || !valSodt) {
        alert("Số điện thoại không được để trống!");
        document.getElementById("phoneNumber").focus();
        return false;
    } else {
        if (!regexSodt.test(valSodt)) {
            alert("Nhập số điện thoại theo định dạng 0xxxxx và đủ 10 số!");
            document.getElementById("phoneNumber").focus();
            return false;
        }
    }

    //Kiểm tra Chọn ít nhất 1 CheckBox 
    let dsCheckbox = document.querySelectorAll('input[type="checkbox"]');
    let check = false;

    //kiểm tra được check
    for (let i = 0; i < dsCheckbox.length; i++) {
        if (dsCheckbox[i].checked) {
            check = true;
            break;
        }
    }
    //Chưa checked 
    if (!check) {
        alert("Chọn ít nhất một dịch vụ!");
        return false;
    }

    let regexDiaChi = /^[\p{L}\d\s,./-]+$/u; //hỗ trợ tiếng việt unicode

    // Kiểm tra Số nhà
    let valSoNha = document.getElementById("soNha").value.trim();

    if (!valSoNha) {
        alert("Vui lòng nhập địa chỉ!");
        document.getElementById("soNha").focus();
        return false;
    } else {
        if (!regexDiaChi.test(valSoNha)) {
            alert("Số nhà, tên đường không hợp lệ!");
            document.getElementById("soNha").focus();
            return false;
        }
    }

    // Kiểm tra Phường/Xã
    let valphuongXa = document.getElementById("phuongXa").value.trim();
    if (!valphuongXa) {
        alert("Nhập Phường/Xã!");
        document.getElementById("phuongXa").focus();
        return false;
    } else {
        if (!regexDiaChi.test(valphuongXa)) {
            alert("Phường/Xã không hợp lệ!");
            document.getElementById("phuongXa").focus();
            return false;
        }
    }

    // Kiểm tra Quận/Huyện
    let valQuanHuyen = document.getElementById("quanHuyen").value.trim();
    if (!valQuanHuyen) {
        alert("Nhập Quận/Huyện!");
        document.getElementById("quanHuyen").focus();
        return false;
    } else {
        if (!regexDiaChi.test(valQuanHuyen)) {
            alert("Quận/Huyện không hợp lệ!");
            document.getElementById("quanHuyen").focus();
            return false;
        }
    }

    // Kiểm tra Thành Phố/ Tỉnh
    let valThanhPho = document.getElementById("thanhPho").value.trim();
    if (!valThanhPho) {
        alert("Nhập Thành phố!");
        document.getElementById("thanhPho").focus();
        return false;
    } else {
        if (!regexDiaChi.test(valThanhPho)) {
            alert("Thành Phố/ Tỉnh không hợp lệ!");
            document.getElementById("thanhPho").focus();
            return false;
        }
    }

    alert("Đăng ký thành công! Chúc mừng bạn!");
    // reset form
    document.querySelector("form").reset();
    return true;
}