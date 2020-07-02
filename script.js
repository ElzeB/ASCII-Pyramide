Pyramide = (pyramideHeight) => {
  
    for (i = 1; i <= pyramideHeight; i++){
        let myNum = '';
        for (j = 0; j < i; j++){
            myNum += '*';
        }
        console.log(myNum);
    }
}
Pyramide();