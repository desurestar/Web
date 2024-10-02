function getNewsById(id) {
    return data.find(news => news.id === id)
}

document.addEventListener("DOMContentLoaded", () => {
    
    const newsId = tempId
    const news = getNewsById(newsId)
    console.log(news)

    if (news) {
        document.getElementById('news_title').textContent = news.title
        document.getElementById('news_description').textContent = news.longDesc
        document.getElementById('news_date').textContent = news.date
        document.getElementById('image').setAttribute("src", news.img)
    } else {
        document.getElementById('news_title').textContent = `Новость не найдена\n ${tempId}`
    }
})