document.addEventListener("DOMContentLoaded", ()=>{
    searchForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        // fetch
        const searchTerm = userInput.value
        fetch("https://www.reddit.com/search.json?q="+searchTerm)
        .then((responseData)=>{
            return responseData.json()
        })
        .then((jsonData)=>{
            // do whatever we need to do with the data
            console.log(jsonData)
        })
        .catch((error)=>{
            console.log(`Error retrieving data from reddit:`)
            console.log(error)
        })
    })
    console.log("The data hath loaded")
})