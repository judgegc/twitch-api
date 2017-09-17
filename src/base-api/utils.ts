export function isSimple(val: any) {
    return typeof val === 'string' || typeof val === 'number';
}

export function isObject(val: any) {
    return typeof val == 'object';
}

export function isArray(val: any) {
    return Array.isArray(val);
}