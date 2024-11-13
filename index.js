function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('dia');
    let bomdia = document.getElementById('bomdia');

    function atualizarRelogio(){
        let data = new Date();
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();

        // Formatação para garantir que tenha dois dígitos (ex: 08:09:05)
        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos

        msg.innerHTML = `Agora são ${horas}:${minutos}:${segundos}`;

        if(horas >= 5 && horas < 12){
            img.src = './fotos/manha.jpg';
            bomdia.innerHTML = 'Bom dia';
            document.body.style.backgroundColor = '#98FF98'
        } else if (horas >= 12 && horas < 18){
            img.src = './fotos/tarde.jpg';
            bomdia.innerHTML = 'Boa Tarde';
            document.body.style.backgroundColor = '#9ACD32'
        } else {
            img.src = './fotos/noite.jpg';
            bomdia.innerHTML = 'Boa Noite';
            document.body.style.backgroundColor = '#191970'
        }
    }

    // Atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);

    // Chama a função uma vez para exibir o horário imediatamente ao carregar a página
    atualizarRelogio();
}