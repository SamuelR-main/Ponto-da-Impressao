const size = {
    sm: '400px',
    md: '650px',
    mg: '860px',
    bg: '1165px',
    full: '1920px',
}
const breakpoints = {
    full: `(min-width: ${size.full})`,
    bg: `(max-width: ${size.bg})`,
    mg: `(max-width: ${size.mg})`,
    md: `(max-width: ${size.md})`,
    sm: `(max-width: ${size.sm})`
}

export default breakpoints