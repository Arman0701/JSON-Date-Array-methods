String.prototype.capitalize = function(){
    let result = this.split(' ');
    for (let i=0; i<result.length; i++){
        let sliced = result[i].toLowerCase().slice(1);
        result[i] = result[i][0].toUpperCase()+sliced;

    }
    return result.join(' ')
}

console.log('hello arMenIa!'.capitalize());