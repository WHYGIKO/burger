const colorNum = document.querySelector('.level100__title'),
    ranglar = ["white", "aqua", "orange", "red", "black"],
    cardBtns = document.querySelectorAll('.card__shop'),
    bigImg = document.querySelector('.header__img'),
    cardImg = document.querySelectorAll('.card__img'),
    basket = document.querySelector('.basket'),
    shop = document.querySelector('.shop'),
    basketClose = document.querySelector('.basket__close'),
    basketBox = document.querySelector('.basket__box'),
    shopItem = document.querySelector('.shop__item'),
    basketTotal = document.querySelector('.basket__total');



const products = {
    crazy: {
        id: 1,
        img: "./images/burger_1.png",
        name: "Crazy",
        price: 31000,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        id: 2,
        img: "./images/burger_2.png",
        name: "Light",
        price: 26000,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        id: 3,
        img: "./images/burger_3.png",
        name: "CheeseBurger",
        price: 29000,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    dburger: {
        id: 4,
        img: "./images/burger_4.png",
        name: "dBurger",
        price: 24000,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
}

cardImg.forEach(img => {
    img.addEventListener('click', function () {
        bigImg.src = this.src;
        imageClick(this)
    });
});

function imageClick(image) {

    const src = image.getAttribute("src");
    bigImg.setAttribute("src", src);
}



let rangI = 0,
    num = 0;

function sonlar(speed) {
    if (num <= 100) {
        let rangIndex = Math.floor(num / 20);
        colorNum.innerHTML = num + " LVL";
        colorNum.style.color = ranglar[rangIndex % ranglar.length];
        num++;
        if (num % 20 === 0 && speed > 20) {
            speed = speed - 20;
        }


        setTimeout(() => {
            sonlar(speed);
        }, speed);
    }
}

window.onload = () => {
    sonlar(100);
};


cardBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        e.preventDefault()
        const parent = btn.closest('.card'),
        parentId = parent.getAttribute('id'),
        cardItem = parent.querySelector('.card__item');

    products[parentId].amount++;

        productInfo(btn)
    })
})

function productInfo(btn) {
    
    const productsArr = []

    for (const key in products) {
        const pk = products[key];
        const cardItem = document.querySelector(`#${key} .card__item`)
        
        if (pk.amount) {
            productsArr.unshift(pk)
            cardItem.classList.add('active');
            cardItem.innerHTML = pk.amount;
            shopItem.classList.add('active')
        }else {
            cardItem.classList.remove('active')
            shopItem.classList.remove('active')
        }
    }

    shopItem.innerHTML = productsArr.length
    basketBox.innerHTML = ''
    let totalPrice = 0 
    for (let i = 0; i < productsArr.length; i++) {
        basketBox.innerHTML += basketInfo(productsArr[i])
        totalPrice+=productsArr[i].Summ

    }
    basketTotal.innerHTML=totalPrice + ' сум'
}

shop.onclick = () => basket.classList.add('active')
basketClose.onclick = () => basket.classList.remove('active')

function basketInfo(product) {
    const { id, name, img, price, amount, Summ } = product;
    return `
    <div class="basket__card">
                        <img class="basket__img" src="${img}" alt="" >
                            <div class="basket__info">
                                <h3 class="basket__title">${name}</h3>
                                <p class="basket__price">${price} сум</p>

                            </div>
                            <div class="basket__btns">
                                <button class="basket__sym" onclick='delProduct(${id})'>-</button>
                                <p class="basket__amount">${amount}</p>
                                <button class="basket__sym" onclick='addProduct(${id})'>+</button>
                            </div> 
                    </div>`
}


function addProduct(id) {
    for (const key in products) {

        const pk = products[key]
        if (pk.id == id) {
            pk.amount++
        }

    }
    productInfo()
}
function delProduct(id) {
    for (const key in products) {

        const pk = products[key]
        if (pk.id == id) {
            pk.amount--
        }

    }
    productInfo()
}
