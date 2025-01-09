const size = {
    sm: '400px',
    md: '650px',
    bg: '1165px',
    full: '1920px',
    vb: '2000px'
}
const breakpoints = {
    bg: `(max-width: ${size.bg})`,
    full: `(max-width: ${size.full})`,
    vb: `(min-width: ${size.vb})`,
    md: `(max-width: ${size.md})`,
    sm: `(max-width: ${size.sm})`
}

export default breakpoints