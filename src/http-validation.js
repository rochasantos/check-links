import chalk from "chalk";

async function getStatus(url) {
  try {
    const response = await fetch(url)
    const status = response.status
    return status
  } catch (error) {
    return 'INVALID_URL'
  }
}

async function validateLinks(arrLinks) {
  try {
    const result = await arrLinks.map(async link => ({link: link, status: await getStatus(link) }))
    const resultResolved = await Promise.all(result)
    console.log(resultResolved)
  } catch (error) {
    console.log(chalk.bgRed.white.bold(error))
  }
}

validateLinks([
  'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
  'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input',
  'https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer',
  'https://developer.mozilla.org/pt-BR/ddd',
  'www.google.com.br'
])

// export default validateLinks;