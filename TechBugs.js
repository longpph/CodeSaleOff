function checkDiscount(userRole, voucherCode, orderTotal) {
    if (userRole === "ADMIN") {
        return "Admin: Giảm giá đặc biệt 50%";
    }
    if (userRole === "VIP") {
        if (voucherCode === true && voucherCode.toString().trim() !== "" && voucherCode !==0) {
            if (orderTotal >= 500) {
                return "VIP: Giảm giá 30%";
            }
                return "VIP: Đơn hàng chưa đủ 500k để giảm giá";
        } 
        return "VIP: Cần có mã Voucher hợp lệ";
    }
    if (orderTotal >= 1000) {
        return "Member: Đơn hàng lớn, giảm giá 10%";
    }
    return "Khách hàng thường: Không có giảm giá";
    }

// --- KHU VỰC THỬ NGHIỆM CỦA HỌC VIÊN ---
// Case 1: Khách hàng nhập mã Voucher là số 1 (Hệ thống cũ coi 1 == true)
console.log("Test Case 1 (1 == true):", checkDiscount("VIP", 1, 600)); 
// Case 2: LỖI BẢO MẬT NGHIÊM TRỌNG
// Khách hàng không có voucher (nhập số 0 hoặc chuỗi rỗng ""), hệ thống vẫn có thể bị "lừa"
console.log("Test Case 2 (0 == false):", checkDiscount("VIP", 0, 600)); 
// Case 3: Nhập null hoặc undefined cho voucher
console.log("Test Case 3 (null):", checkDiscount("VIP", null, 600));