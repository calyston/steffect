//Strapi FAQ Page Call

const faqTextDiv = document.getElementById('faqText')

fetch('http://167.99.193.212/faq-page')
  .then(res => res.json())
  .then((data) => {
    createHtml(data)
    return
  })
  .catch(err => {
    console.log(err)
  })

const createHtml = (pageInfo) => {
  // console.log(pageInfo.faqText.split('\n'))
  faqTextDiv.innerHTML = pageInfo.faqText.split('\n').map(line => {
    return line ? `<p>${line}</p>` : '<br>'
  }).join('')
}