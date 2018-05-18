// @flow weak
export const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Tên loại công việc là bắt buộc';
    }

    return errors;
};
