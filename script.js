const products = {
  plainBurger: {
    name: 'GAMBURGER',
    price: 10000,
    kcal: 200,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
    get Kcal() {
      return this.kcal * this.amount
    }
  },
  freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    kcal: 280,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
    get Kcal() {
      return this.kcal * this.amount
    }
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcal: 350,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
    get Kcal() {
      return this.kcal * this.amount
    }
  },
}

const productBtn = document.querySelectorAll('.main__product-btn');
addCart = document.querySelector('.addCart'),
  receipt = document.querySelector('.receipt'),
  receiptWindow = document.querySelector('.receipt__window'),
  receiptOut = document.querySelector('.receipt__window-out'),
  receiptBtn = document.querySelector('.receipt__window-btn'),

  productBtn.forEach(btn => {
    btn.addEventListener('click', e => {

      buy(btn)

    })
  })

function buy(btn) {
  const parent = btn.closest('.main__product'),
    parentId = parent.getAttribute('id'),
    productNum = parent.querySelector('.main__product-num'),
    productPrice = parent.querySelector('.main__product-price span'),
    productKcal = parent.querySelector('.main__product-kcall span'),
    btnSymbol = btn.getAttribute('data-symbol')
  if (btnSymbol === '+' && products[parentId].amount < 10) {
    var nums = products[parentId].amount++
  }
  else if (btnSymbol === '-' && products[parentId].amount > 0) {
    var nums = products[parentId].amount--
  }
  productNum.innerHTML = products[parentId].amount
  productPrice.innerHTML = products[parentId].Sum
  productKcal.innerHTML = products[parentId].Kcal
}
let arrayProducts = [];
totalName = '';
totalPrice = 0;
totalKcal = 0;
totalNums = 0;
addCart.addEventListener('click', () => {
  for (const key in products) {
    const product = products[key]
    if (product.amount > 0) arrayProducts.push(product)
  }

  arrayProducts.forEach(el => {
    totalName += `\n${el.name}\n`
    totalPrice += el.Sum
    totalKcal += el.Kcal
    totalNums += el.amount
  })
  receiptOut.innerHTML = `Purchased: \n${totalName}\nCalories: ${totalKcal}\nToal Prices: ${totalPrice} sum`
  receipt.style.display = 'flex'
  setTimeout(() => {
    receipt.style.opacity = 1
  }, 0);
  setTimeout(() => {
    receiptWindow.style.top = '100px'
  }, 200);
})
receiptBtn.addEventListener('click', () => location.reload())

const info = document.querySelectorAll('.main__product-info');
      view = document.querySelector('.view');
      viewImg = document.querySelector('img');
      viewClose = document.querySelector('.view__close');

info.forEach(el => el.addEventListener('dblclick', e=>{
  const img = e.target
    .closest('.main__product-info')
    .querySelector('.main__product-img')
    .getAttribute('src')
  viewImg.setAttribute('src', img)
  view.classList.add('active')
}))

viewClose.addEventListener('click', ()=>view.classList.remove('active'))

var timer = document.querySelector('.header__timer-extra');

let time = 50

const count = (i = 0) => {
  timer.innerHTML = i
  if (timer.innerHTML === '100') return;
  if (timer.innerHTML === '50') time = 100;
  if (timer.innerHTML === '75') time = 150;
  if (timer.innerHTML === '90') time = 200;
  if (timer.innerHTML === '95') time = 250;
  if (timer.innerHTML === '99') time = 500;
  i++
  setTimeout(() => {
    count(i)
  }, time);
}
count()

