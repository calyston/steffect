//Strapi About Page Call

const aboutText = document.getElementById('aboutText')

const aboutImage = document.getElementById('aboutImage')

 
fetch('http://167.99.193.212/about-page')
  .then(res=>res.json())
  .then((data)=>{
    createHtml(data)
    return
  })
  .catch(err=>{
    console.log(err)
  })
 
const createHtml = (pageInfo) =>{
  const {aboutImage, aboutText} = pageInfo

  const pageText = (`
      <p>${aboutText}</p>
  `)
  const pageImage = (`
    <img class="about-img" src=http://167.99.193.212${aboutImage.url}>
  `)

  aboutText.innerHTML = pageHtml
  aboutImage.innerHTML = pageHtml
  return
}