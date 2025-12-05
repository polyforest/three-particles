;(function () {
    const btn = document.createElement('a')
    btn.id = 'editButton'
    btn.href = '#'
    btn.textContent = 'Edit on CodePen'
    Object.assign(btn.style, {
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '10px 20px',
        background: '#333',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        borderRadius: '5px',
        zIndex: '1000',
        fontSize: '14px',
        opacity: '0.8',
    })
    document.body.appendChild(btn)

    btn.addEventListener('click', (e) => {
        e.preventDefault()

        // Clone the document to perform cleanup without affecting the live page
        const clone = document.documentElement.cloneNode(true)

        // Remove the edit button from the clone
        const clonedBtn = clone.querySelector('#editButton')
        if (clonedBtn) clonedBtn.remove()

        // Remove the helper script from the clone
        const scripts = clone.querySelectorAll('script')
        scripts.forEach((s) => {
            if (s.src && s.src.includes('codepen-helper.js')) {
                s.remove()
            }
        })

        // Clean up the canvas attributes added by Three.js
        const canvas = clone.querySelector('#mainCanvas')
        if (canvas) {
            canvas.removeAttribute('data-engine')
            canvas.removeAttribute('width')
            canvas.removeAttribute('height')
            canvas.removeAttribute('style')
        }

        const head = clone.querySelector('head')
        const body = clone.querySelector('body')

        // Extract style and script tags from head and trim 8 spaces of indentation
        const headContent = head
            ? Array.from(head.querySelectorAll('style, script'))
                  .map((el) => el.outerHTML)
                  .join('\n')
                  .replace(/\n {8}/g, '\n')
            : ''

        const data = {
            title: 'Three Particles Example',
            html: headContent + '\n' + (body ? body.innerHTML : ''),
            editors: '100', // HTML open
        }

        const form = document.createElement('form')
        form.action = 'https://codepen.io/pen/define'
        form.method = 'POST'
        form.target = '_blank'

        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = 'data'
        input.value = JSON.stringify(data)

        form.appendChild(input)
        document.body.appendChild(form)
        form.submit()
        document.body.removeChild(form)
    })
})()
