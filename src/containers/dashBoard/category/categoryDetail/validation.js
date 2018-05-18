// @flow weak
export const validate = values => {
    const errors = {};

    if (!values.nameAdd) {
        errors.nameAdd = 'Tên loại công việc là bắt buộc';
    }

    return errors;
};
