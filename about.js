//Strapi About Page Call

const aboutInfoDiv = document.getElementById('aboutInfo')

fetch('http://167.99.193.212/about-page')
  .then(res => res.json())
  .then((data) => {
    createHtml(data)
    return
  })
  .catch(err => {
    console.log(err)
  })

const createHtml = (pageInfo) => {
  const { aboutImage, aboutText } = pageInfo
  const aboutHtml = (`
    <div>
      <p>${aboutText}</p>
      <img class="about-img" src=http://167.99.193.212${aboutImage.url}>
    </div>
  `)

  aboutInfoDiv.innerHTML = aboutHtml;
  return
}