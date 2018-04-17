// @flow weak
export const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Tên kỹ năng là bắt buộc';
    }

    return errors;
};
