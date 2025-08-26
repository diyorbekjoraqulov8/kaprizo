export const scrollToSmooth = (name: string): void => {
    const element = document.getElementById(name)
    let scrollTop;
    if (typeof element?.scrollHeight === 'number') {
        scrollTop = element?.offsetTop - 100
    }
    if (typeof scrollTop === 'number') {
        window.scrollTo({ top: scrollTop, left: 0, behavior: 'smooth' })
    }
}

export const formatPhone = ({ target }: { target: { value: string } }): string => {
    console.log(target)
    return target.value += '1-1'
}

export const validatePhone = (phone: string) => {
    let v = phone.replace(/[^0-9]/g, "");
    if (!v?.startsWith('+998')) v = '+998'
    const l = v.length;
    console.log('phone: ', phone)
    console.log('l: ', l)
    let lastValue;
    if (l < 3) {
        lastValue = v.replace(/^([0-9]{2})/, "$1");
    } else if (l < 6) {
        const reg = new RegExp(`^([0-9]{2})([0-9]{${l - 2}})`);
        lastValue = v.replace(reg, "$1 $2");
    } else if (l < 8) {
        const reg = new RegExp(`^([0-9]{2})([0-9]{3})([0-9]{${l - 5}})`);
        lastValue = v.replace(reg, "$1 $2-$3");
    } else {
        const reg = new RegExp(`^([0-9]{2})([0-9]{3})([0-9]{2})([0-9]{${l - 7}})`);
        lastValue = v.replace(reg, "$1 $2-$3-$4");
    }
    return lastValue
};

export function formatterVoucherCode(e) {
    const numbers = e.target.value?.replace(/[^0-9]/g, '') // Only number

    let value = e.target.value.toUpperCase()
    value = value.replace(/[^A-Z0-9]/g, '')

    let digits = numbers.slice(0, 9).replace(/(\d{4})(\d{5})/, '$1-$2')
    let letters = value.slice(9, 10).replace(/[^A-Z]/g, '')
    e.target.value = digits + letters

    return e.target.value
}