import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'

const dictionary = {
    en: {
        messages: {
            required: () => 'Trường này không được trống',
            email: () => 'Email không hợp lệ',
            min: () => 'Mật khẩu chứa tối thiểu 8 ký tự',
            confirmed: () => 'Mật khẩu xác nhận không khớp với mật khẩu',
            numeric: () => 'Trường này phải nhập số'
        }
    }
}

// Override and merge the dictionaries
Validator.localize(dictionary)

//
Validator.extend('key', {
    getMessage(field, args) {
        return 'Trường này không hợp lệ'
    },
    validate(value, args) {
        let partt = new RegExp('^[a-zA-Z0-9-_]+$')
        return partt.test(value)
    }
})

Validator.extend('required_if_empty', {
    getMessage(field, args) {
        return 'Trường này không được để trống'
    },
    validate(value, [form_control_name]) {
        console.log(form_control_name)
        const target = document.getElementsByName(form_control_name);
        if (target.length == 0 && _.isEmpty(value)) return false;

        let  _value_rule = target[0].value.trim();
        if (!_.isEmpty(_value_rule)) return true;
        return !_.isEmpty(value);
    }
})

Validator.extend('greater_equal_time', {
    getMessage(field, args) {
        return 'Phải lớn hơn thời gian bắt đầu'
    },
    validate(value, [form_control_name]) {
        const target = document.getElementsByName(form_control_name);

        if (target.length == 0) return true;

        if (_.isEmpty(value)) return true;

        let _end_date = value;
        let  _start_date = target[0].value.trim();

        _start_date = moment(_start_date);
        _end_date = moment(_end_date);

        return _end_date.isSameOrAfter(_start_date)
    }
})

Vue.use(VeeValidate, {
    events: '',
    errorBagName: 'v_errors',
    fieldsBagName: 'v_fields'
})
