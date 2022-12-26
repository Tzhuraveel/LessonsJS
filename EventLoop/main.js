


function getUp(status){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(status){
            console.log('OOO...You got up!')
            let stamina = 100
            resolve(stamina)
        }else{
            console.log('He is sleeping')
            reject('You have lost your day')
        }
        },2000)
    })
}
function nextActionAfterSleep(stamina){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        })
    })
}





getUp(true)