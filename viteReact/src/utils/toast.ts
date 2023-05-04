export default class Toast {
  el

  constructor(text: string) {
    this.el = document.createElement('section')
    this.el.innerHTML = `<span>${text}</span>`
    this.el.className = 'toastMessage'
  }

  show() {
    document.querySelector('body')?.appendChild(this.el)
    setTimeout(()=> {
      this.el.remove()
    }, 3000)
  }
}