// @flow weak
export const validate = values => {
    const errors = {};
    const { username, password } = values;

    if (!username) {
        errors.username = 'Tên người dùng là bắt buộc';
    }

    if (!password) {
        errors.password = 'Mật khẩu là bắt buộc';
    }

    return errors;
};
