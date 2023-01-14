// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


const generalBlock = document.querySelector('.container');



const arr = []


function recursion(block) {

    if (block.children.length >= 1) {
        let blockChild = block.children
        for (const blockElement of blockChild) {
            if (blockElement.tagName !== 'OL') {
                arr.push(blockElement);
            }
            recursion(blockElement)
        }
    }
}

recursion(generalBlock)
console.log(arr)


function click(block) {

    const buttonPrevious = document.createElement('button');
    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = 'Next'
    buttonPrevious.innerHTML = 'Back'
    block.append(buttonPrevious, buttonNext)

    let count = -1
    buttonNext.onclick = () => {
        if(count === arr.length - 1) {
            count = -1
            arr[arr.length - 1].style.backgroundColor = 'white'
        }
        count ++
            arr[count].style.backgroundColor = 'red'
        if(count > 0){
            arr[count - 1].style.backgroundColor = 'white'
        }

    }

       buttonPrevious.onclick = () => {
           if (count < 0) {
               alert('Opps...you can`t go back');
           } else {
               if (count === 0) {
                   arr[count].style.backgroundColor = 'white'
                   count = arr.length
               }
               arr[--count].style.backgroundColor = 'red';
               if (count + 1 !== arr.length) {
                   arr[count + 1].style.backgroundColor = 'white'
               }
           }


       }



}
click(generalBlock)










