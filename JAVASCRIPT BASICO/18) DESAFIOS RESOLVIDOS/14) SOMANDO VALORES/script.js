        
        let x = document.getElementById('num1');
        let y = document.getElementById('num2');
        let res = document.getElementById('result');
        const btn = document.getElementById('btn');
        btn.addEventListener('mouseenter',enter);
        btn.addEventListener('mouseout',out);

        function enter(){
            btn.style.backgroundColor = 'darkred';
            btn.style.color = 'white';
        }

        function out(){
            btn.style.backgroundColor = '#d3d2d2';
            btn.style.color = 'black';
        }

        function somar(){

            if(x.value.length == 0 || y.value.length == 0){
                alert('Adicione números antes de clicar em somar.');
            } else {

            btn.style.backgroundColor = 'green';

            let n1 = Number(x.value);
            let n2 = Number(y.value);
            let resultado = n1 + n2;

            res.value = resultado;

            }

        }