import { data } from './data.js'
// import './style.css'



document.addEventListener('DOMContentLoaded', () => {
	const content = document.getElementById('cont')

	data.forEach(news => {
		const item = document.createElement('article')
		item.setAttribute('class', 'new_Item')
		item.setAttribute('id', news.id)
		item.innerHTML = `
                <h2 class="new_Item__title">${news.title}</h2>
                <figure class="new_Item__img">
                    <img width="30%" src=${news.img}>
                </figure>
                <p class="new_Item__p">
                    ${news.shortDesc}
                </p>
                <details class="new_Item__details">
                    <summary>Подробнее</summary>
                    <p id="${news.id}"><a href="news.html?id=${news.id}" onclick="saveId(this)">Ссылка на источник</a></p>
                </details>
                <time class="new_Item_time">Статья от 1 марта 2024
                    года</time>
            `
		content.appendChild(item)
	})
})
