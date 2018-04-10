// @flow weak
export const validate = values => {
    const errors = {};
    const { username, password, confirmPassword } = values;

    if (!username) {
        errors.username = 'Tên người dùng là bắt buộc';
    }
    else if (username.length < 6) {
        errors.username = 'Tên người dùng phải chứa ít nhất 6 ký tự';
    }

    if (!password) {
        errors.password = 'Mật khẩu là bắt buộc';
    }

    if (password !== confirmPassword) {
        errors.confirmPassword = 'Xác nhận mật khẩu không khớp';
    }

    return errors;
};
