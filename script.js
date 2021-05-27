const products = {
  matiz: {
    name: 'MATIZ',
    price: 5000,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  spark: {
    name: 'SPARK',
    price: 7500,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  nexia: {
    name: 'NEXIA',
    price: 8500,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  ravon: {
    name: 'RAVON',
    price: 10000,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  lacetti: {
    name: 'LACETTI',
    price: 13500,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  cobalt: {
    name: 'COBALT',
    price: 15000,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  gentra: {
    name: 'GENTRA',
    price: 17000,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  orlando: {
    name: 'ORLANDO',
    price: 20000,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
  },
  malibu: {
    name: 'MALIBU',
    price: 25000,
    amount: 0,
    get Sum() {
      return this.price * this.amount
    },
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
    btnSymbol = btn.getAttribute('data-symbol')
  if (btnSymbol === '+' && products[parentId].amount < 10) {
    var nums = products[parentId].amount++
  }
  else if (btnSymbol === '-' && products[parentId].amount > 0) {
    var nums = products[parentId].amount--
  }
  productNum.innerHTML = products[parentId].amount
  productPrice.innerHTML = products[parentId].Sum
}
let arrayProducts = [];
totalName = '';
totalPrice = 0;
totalNums = 0;
addCart.addEventListener('click', () => {
  for (const key in products) {
    const product = products[key]
    if (product.amount > 0) arrayProducts.push(product)
  }

  arrayProducts.forEach(el => {
    totalName += `\n${el.name} - ${el.amount}\n`
    totalPrice += el.Sum
  })
  receiptOut.innerHTML = `Purchased: \n${totalName}\nToal Prices: ${totalPrice} $`
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
      viewImg = document.querySelector('.view__img');
      viewClose = document.querySelector('.view__close');

var val = "";      

if(window.innerWidth > 710){
  val = 'dblclick'
  console.log(val);
}else{
  val = 'click'  
  console.log(val);   
}

info.forEach(el => el.addEventListener(val, e=>{
  const img = e.target
    .closest('.main__product-info')
    .querySelector('.main__product-img')
    .getAttribute('src')
  viewImg.setAttribute('src', img)
  view.classList.add('active')
  console.log(img);
}))

viewClose.addEventListener('click', ()=>view.classList.remove('active'))

var timer = document.querySelector('.header__timer-extra');
var timerText = document.querySelector('.header__timer-text');

let time = 50

const count = (i = 0) => {
  timer.innerHTML = i
  if (timer.innerHTML === '100') {
    timerText.innerHTML = 'STOP'
    timer.style.color = 'red'
    timerText.style.color = 'red'
    return
  };
  if (timer.innerHTML === '50') {
    time = 100
    timer.style.color = 'green'
    timerText.style.color = 'green'
  };
  if (timer.innerHTML === '75') {
    time = 150
    timer.style.color = 'yellow'
    timerText.style.color = 'yellow'
  };
  if (timer.innerHTML === '90') {
    time = 200
    timer.style.color = 'rgba(209, 107, 23, 0.835)'
    timerText.style.color = 'rgba(209, 107, 23, 0.835)'
  };
  if (timer.innerHTML === '95') {
    time = 250
    timer.style.color = 'rgba(255, 99, 99, 0.835)'
    timerText.style.color = 'rgba(255, 99, 99, 0.835)'
  };
  if (timer.innerHTML === '100') {
    time = 500
  };
  i++
  setTimeout(() => {
    count(i)
  }, time);
}
count()

