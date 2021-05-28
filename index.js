// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => driver.startsWith(name))
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}