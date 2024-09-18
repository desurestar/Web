const textBlock = document.getElementById('text-block')
const textInput = document.getElementById('input-text')

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() === 'textarea') {
		autoResize(event.target)
	}
})

function autoResize(textarea) {
	textarea.style.height = '0px' // Сбрасываем высоту для правильного пересчета
	textarea.style.height = textarea.scrollHeight - 30 + 'px' // Устанавливаем высоту равную содержимому
}

function InsertBefore() {
	if (textInput.value === '') return
	const newDiv = document.createElement('div')
	newDiv.textContent = textInput.value
	textBlock.parentNode.insertBefore(newDiv, textBlock)
}
function InsertAfter() {
	if (textInput.value === '') return
	const newDiv = document.createElement('div')
	newDiv.textContent = textInput.value
	textBlock.parentNode.insertBefore(newDiv, textBlock.nextSibling)
}
function Replace() {
	if (textInput.value === '') return
	textBlock.textContent = textInput.value
}
