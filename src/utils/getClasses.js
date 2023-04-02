export const getClasses = (classes) => {
    const data = classes
        .filter(item => item !== '')
        .join(' ')
        .trim();
    return data;
}
