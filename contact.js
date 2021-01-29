//Strapi Contact Page Call

const contactTextDiv = document.getElementById('contactText')

fetch('http://167.99.193.212/contact-page')
  .then(res => res.json())
  .then((data) => {
    createHtml(data)
    return
  })
  .catch(err => {
    console.log(err)
  })

const createHtml = (pageInfo) => {
  const { contactText } = pageInfo
  const contactHtml = (`
    <div>
      <p>${contactText}</p>
    </div>
  `)

  contactTextDiv.innerHTML = contactHtml;
  return
}