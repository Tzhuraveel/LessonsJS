// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар



const container = document.createElement('div');



const form = document.createElement('form');
form.classList.add('form');


const inputOne = document.createElement('input');
inputOne.classList.add('product-name');
inputOne.placeholder = 'product';
inputOne.required = true;


const inputTwo = document.createElement('input');
inputTwo.classList.add('product-quantity');
inputTwo.setAttribute('type','number')
inputTwo.placeholder = 'quantity';
inputTwo.required = true;


const inputThree = document.createElement('input');
inputThree.classList.add('price-of-product');
inputThree.setAttribute('type','number')
inputThree.placeholder = 'price';
inputThree.required = true;

const inputFour = document.createElement('input');
inputFour.classList.add('link-picture');
inputFour.placeholder = 'link to the picture';
inputFour.required = true;

const button = document.createElement('button');
button.classList.add('link-button')

button.onclick.pre = () => {

}



form.append(inputOne, inputTwo, inputThree, inputFour);
container.append(form, button);
document.body.appendChild(container);




