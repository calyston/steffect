//Strapi Shipping & Returns Page Call

const shippingTextDiv = document.getElementById('shippingText')

const returnsTextDiv = document.getElementById('returnsText')

fetch('http://167.99.193.212/shipping-and-returns')
  .then(res => res.json())
  .then((data) => {
    createHtml(data)
    return
  })
  .catch(err => {
    console.log(err)
  })

const createHtml = (pageInfo) => {
  const { shippingText, returnsText } = pageInfo
  const shippingHtml = (`
    <div>
      <p>${shippingText}</p>
    </div>
  `)

  const returnsHtml = (`
  <div>
    <p>${returnsText}</p>
  </div>
  `)

  shippingTextDiv.innerHTML = shippingHtml;

  returnsTextDiv.innerHTML = returnsHtml;

  return
}