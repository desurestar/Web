const textBlock = document.getElementById('text-block')
const textInput = document.getElementById('input-text')
console.log(10)
function InsertBefore() {
    const newDiv = document.createElement('div')
    newDiv.textContent = textInput.value
    textBlock.parentNode.insertBefore(newDiv, textBlock)
}
function InsertAfter() {
    const newDiv = document.createElement('div')
    newDiv.textContent = textInput.value
    textBlock.parentNode.insertBefore(newDiv, textBlock.nextSibling)
}
function Replace() {
    textBlock.textContent = textInput.value
}