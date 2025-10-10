const colorNum = document.querySelector('.level100__title'),
    ranglar = ["white", "aqua", "orange", "red", "black"],
    cardBtns = document.querySelectorAll('.card__shop'),
    bigImg = document.querySelector('.header__img'),
    cardImg = document.querySelectorAll('.card__img');



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



cardBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        productInfo(btn)
    })
})

function productInfo(tumsoh) {
    const parent = tumsoh.closest('.card'),
          parentId = parent.getAttribute('id'),
          cardItem = parent.querySelector('.card__item');

    products[parentId].amount++;

    for (const key in products) {
        const pk = products[key];
        if (pk.amount) {
            cardItem.classList.add('active');
            cardItem.innerHTML = pk.amount;
        }
    }
    
    
}

    console.log(cardImg);
    
    
cardImg.forEach(img => {
    img.addEventListener('click', function() {
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
