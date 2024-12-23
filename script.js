const url = 'https://v6.exchangerate-api.com/v6/b7e287de4220e4d73800e1e3/latest/USD';

let moedabr;
let moedacl;

fetch(url)
    .then(response => response.json())
    .then(data => {
        moedabr = data.conversion_rates.BRL;
        moedacl = data.conversion_rates.CLP;
        moedaus = data.conversion_rates.USD;
        moedajp = data.conversion_rates.JPY;
        moedaeu = data.conversion_rates.EUR;
        moedaaf = data.conversion_rates.ZAR;
        moedach = data.conversion_rates.CNY;
        moedamx = data.conversion_rates.MXN;
        moedacv = data.conversion_rates.CVE;






        magica = () => {
            let entrada = document.getElementById('b').value;
            let resultado = document.getElementById('B');
            let setona = document.getElementById('setona');



            const selecL = document.getElementById('a').selectedOptions;
            for (let option of selecL) {
                moedaA = option.value;
                if (moedaA == 'Brasil') {
                    moedaA = moedabr;
                    bandeiraA.src = 'Brasil.png';
                }

                if (moedaA == 'Chile') {
                    moedaA = moedacl;
                    bandeiraA.src = 'Chile.png';
                }

                if (moedaA == 'EUA') {
                    moedaA = moedaus;
                }

                if (moedaA == 'Japao') {
                    moedaA = moedajp;
                }

                if (moedaA == 'Euro') {
                    moedaA = moedaeu;
                }

                if (moedaA == 'Africa') {
                    moedaA = moedaaf;
                }

                if (moedaA == 'China') {
                    moedaA = moedach;
                }

                if (moedaA == 'Mexico') {
                    moedaA = moedamx;
                }

                if (moedaA == 'Caboverde') {
                    moedaA = moedacv;
                }

            };

            const selecR = document.getElementById('A').selectedOptions;
            for (let option of selecR) {
                moedaB = option.value;
                if (moedaB == 'Brasil') {
                    moedaB = moedabr;

                }

                if (moedaB == 'Chile') {
                    moedaB = moedacl;

                }

                if (moedaB == 'EUA') {
                    moedaB = moedaus;
                }

                if (moedaB == 'Japao') {
                    moedaB = moedajp;
                }

                if (moedaB == 'Euro') {
                    moedaB = moedaeu;
                }

                if (moedaB == 'Africa') {
                    moedaB = moedaaf;
                }

                if (moedaB == 'China') {
                    moedaB = moedach;
                }
                
                if (moedaB == 'Mexico') {
                    moedaB = moedamx;
                }

                if (moedaB == 'Caboverde') {
                    moedaB = moedacv;
                }
            };


            let a = parseFloat(entrada);
            let A = moedaA;
            let B = moedaB;




            console.log('a: ', a);
            console.log('A: ', A);
            console.log('B: ', B);
            console.log('entrada: ', entrada);

            resultado.innerHTML = ('resultado: ', (parseFloat(a) * B) / A).toFixed(2);
        };





        setona.addEventListener('click', magica);
    })
    .catch(error => console.error('Erro ao acessar a API:', error));

let caixaA = document.getElementById('a').addEventListener('change', function(){
    let valorA = this.value;
    let imagemA = document.getElementById('bandeiraA');

    imagemA.src = valorA+'.png';
});

let caixaB = document.getElementById('A').addEventListener('change', function(){
    let valorB = this.value;
    let imagemB = document.getElementById('bandeiraB');

    imagemB.src = valorB+'.png';
});



