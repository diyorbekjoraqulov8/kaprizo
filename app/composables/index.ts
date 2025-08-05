export const scrollToSmooth = (name: string): void => {
    const element = document.getElementById(name)
    let scrollTop;
    if (typeof element?.scrollHeight === 'number') {
        scrollTop = element?.offsetTop - 77
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