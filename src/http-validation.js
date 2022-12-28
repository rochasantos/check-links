import chalk from "chalk";
 
async function getStatus(url) {
  try {
    const response = await fetch(url)
    const status = response.status
    return status
  } catch (error) {
    return error.cause.code
  }
}

async function validateLinks(arrLinks) {
  try {
    const result = await arrLinks.map(async link => ({
      link: link, 
      status: await getStatus(link) 
    }))
    return await Promise.all(result)     
  } catch (error) {
    console.log(chalk.bgRed.white.bold(error))
  }
}

export default validateLinks;