const llamada_rest = async () => {
  const res = await (
    new Promise(resolve => {
      setTimeout(() => resolve('resolucion primera'), 2000)
    })
  )

  console.log({res})

  const res2 = await (
    new Promise(resolve => {
      setTimeout(() => resolve('resolucion primera'), 2000)
    })
  )

  console.log({res2})
}

async function main () {
    await llamada_rest()
    console.log('fin')
}

main()
