// @flow weak
export const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Tên lĩnh vực là bắt buộc';
    }

    return errors;
};
