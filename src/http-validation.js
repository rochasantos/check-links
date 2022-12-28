import chalk from "chalk";

async function getStatus(url) {
  try {
    const response = await fetch(url)
    console.log('resolveu')
    console.log(chalk.green(response.status))
  } catch (error) {
    console.log(error)
  }
}

getStatus('google.com.br');

// const validateLinks = async (links) => {
//   try {
//     const arrayPromises = await Promise.all(
//       links.map( async link =>  await getStatus(link))
//     )
//     console.log(chalk.green(arrayPromises));    
//   } catch (error) {
//     console.log(chalk.bgRed.white.bold(error))
//   }
// }

// export default validateLinks;