document.querySelector('#output').style.visibility = 'hidden';
document.querySelector('#kgsInput').addEventListener('input', function (e) {
    document.querySelector('#output').style.visibility = 'visible';
    let kgs = e.target.value;
    document.querySelector('#gramsOutput').innerHTML = (kgs * 1000).toFixed(2);
    document.querySelector('#lbsOutput').innerHTML = (kgs * 2.2046).toFixed(2);
    document.querySelector('#ozOutput').innerHTML = (kgs * 35.274).toFixed(2);
});