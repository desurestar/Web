import { data } from 'data'
import 'style.css'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

let viewedObj = data.find(obj => obj.id === Number(id))

document.querySelector('#app').innerHTML = `
  <div class="block">
    <img class="image" src="${viewedObj.img}"/>
    <div class="text">
      <span>${viewedObj.title}</span>
      <span>${viewedObj.text}</span>
    </div>
  </div>
`
