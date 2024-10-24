import { data } from 'data.js'
import 'style.css'

document.querySelector('#app').innerHTML = `
  ${data
		.map(
			obj => `
      <a href="detail.html?id=${obj.id}">
        <div class="block">
          <img class="image" src="${obj.img}"/>
          <div class="text">
            <span>${obj.title}</span>
          </div>
        </div>
      </a>
      `
		)
		.join('')}
`
