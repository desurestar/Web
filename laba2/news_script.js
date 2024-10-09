import { data } from './data.js'

document.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search)
	const id = params.get('id')
	let news = data.find(obj => obj.id == Number(id))
	

	if (news) {
		document.getElementById('news_title').textContent = news.title
		document.getElementById('news_description').textContent = news.longDesc
		document.getElementById('news_date').textContent = news.date
		document.getElementById('image').setAttribute('src', news.img)
	} else {
		document.getElementById(
			'news_title'
		).textContent = `Новость не найдена\n ${news}`
	}
})
