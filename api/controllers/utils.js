// Check if a JSON object is empty
const isEmpty = (obj) => {
    for (let i in obj) return false;
    return true;
}

module.exports = {
    isEmpty: isEmpty
}