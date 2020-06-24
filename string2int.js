export default (input) => {
    const matched = input.match(/\d/g)
    return matched.reduce((init, curr, index) => init + curr * Math.pow(10, matched.length - index - 1), 0)
}
