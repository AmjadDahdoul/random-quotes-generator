let favQuotes = JSON.parse(localStorage.getItem('favorite')) || []

export const addToFavorite = (quote) => {
    const findQuote = favQuotes.find((find) => find._id === quote._id)
    if (findQuote) return
    favQuotes.push(quote)
    localStorage.setItem('favorite', JSON.stringify(favQuotes))
}

//
export const removeFromFavorite = (quote) => {
    favQuotes = favQuotes.filter((item) => item._id !== quote._id)
    localStorage.setItem('favorite', JSON.stringify(favQuotes))
}

export const getFavorite = () => {
    return JSON.parse(localStorage.getItem('favorite'))
}

export const checkFavorite = (quote) => {
    const findQuote = favQuotes.find(find => find._id === quote)
    return findQuote !== undefined
}