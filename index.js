function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('dia');
    let bomdia = document.getElementById('bomdia');

    function atualizarRelogio(){
        let data = new Date();
        let horas = data.getHours();
        let minutos = data.getMinutes();

        // Formatação para garantir que tenha dois dígitos (ex: 08:09:05)
        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;

        msg.innerHTML = `Agora são ${horas}:${minutos}`;

        if(horas >= 5 && horas < 12){
            img.src = 'Hora-do-DIa/fotos/manha.jpg';
            bomdia.innerHTML = 'Bom dia';
            document.body.style.backgroundColor = 'lightblue'
        } else if (horas >= 12 && horas < 18){
            img.src = '/Hora-do-DIa/fotos/tarde.jpg';
            bomdia.innerHTML = 'Boa Tarde';
            document.body.style.backgroundColor = 'orange'
        } else {
            img.src = '/Hora-do-DIa/fotos/noite.jpg';
            bomdia.innerHTML = 'Boa Noite';
            document.body.style.backgroundColor = 'black'
        }
    }

    // Atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);

    // Chama a função uma vez para exibir o horário imediatamente ao carregar a página
    atualizarRelogio();
}