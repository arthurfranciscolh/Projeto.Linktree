function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')
    if (html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Arthur Francisco, sendo o fundo uma parede bege, vestindo blusa laranja')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Arthur Francisco, em uma loja de varejo de borracha, usando um óculos')
    }
}