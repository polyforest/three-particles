export const downloadJson = (data: any, filename: string): void => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${filename}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}
