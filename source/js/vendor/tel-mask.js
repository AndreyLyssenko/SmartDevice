// https://webkaa.ru/javascript/maska-nomera-telefona-js

const eventCallback = function (e) {
    let el = e.target,
    clearVal = el.dataset.phoneClear,
    pattern = el.dataset.phonePattern,
    matrixDef = "+7(___) ___-__-__",
    matrix = pattern ? pattern : matrixDef,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
            e.target.value = '';
            return;
        }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
}

const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
for (let elem of phoneInputs) {
    for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCallback);
    }
}
