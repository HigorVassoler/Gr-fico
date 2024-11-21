const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--bg-color'),
    size: 10,
    family: getCSS('--font'),
}

export {getCSS, tickConfig}