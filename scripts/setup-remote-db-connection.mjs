import shell from 'shelljs'

shell.exec('pscale connect gustavo-dev development --port 3309', (e) => {
    if (e) console.log(e)
})

shell.exec('pscale connect gustavo-dev shadow --port 3310', (e) => {
    if (e) console.log(e)
})
