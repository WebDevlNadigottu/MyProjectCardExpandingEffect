const panels = document.querySelectorAll('.panel')   // const variable we use because value should not be changed.
// console.log(panels[])  // here we got an array so we use aaray here
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // console.log('Working....')
        // console.log(panel) // here when clicked on the panel that will select.
        removeActiveClass() // here it is a custom function and we can take any name for it like removeActivePanel()
        // Note: here removeactiveclass take first means first it checks and removes all active classes then with add class will be worked then whatever we click that is activeted.
        panel.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}