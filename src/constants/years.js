
const startYear = 1945
const currentYear = new Date().getFullYear()
const years = []

for (
    let year = startYear;
    year <= currentYear; year++) {

    years.push(year)
}

export default years 