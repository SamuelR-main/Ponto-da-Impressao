const size = {
    sm: '426px',
    md: '650px',
    mg: '860px',
    bg: '1280px',
    full: '1281px',
}
const breakpoints = {
    full: `(min-width: ${size.full})`,
    bg: `(max-width: ${size.bg})`,
    mg: `(max-width: ${size.mg})`,
    md: `(max-width: ${size.md})`,
    sm: `(max-width: ${size.sm})`
}

export default breakpoints