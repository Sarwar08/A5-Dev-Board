
document.getElementById('btn-theme').addEventListener('click', function(event){

    // event.preventDefault();
    
    const colorArray = ['yellow', 'indianred', 'purple', 'blue', 'yellowgreen', 'black'];
    
    const randomNumber = Math.floor(Math.random() * colorArray.length);
    console.log(randomNumber);

    // for (const color of colorArray){

    // }

    document.getElementById('body').style.backgroundColor = "bg-yellow-500";
    // document.getElementById('body').style.backgroundColor = colorArray[randomNumber];
})