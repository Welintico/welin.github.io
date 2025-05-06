function mostrarInfo(tipo) {
    let mensaje = '';
    
    if (tipo === 'perros') {
        mensaje = '¡Los perros son excelentes compañeros! Necesitan:\n' +
                 '- Paseos diarios\n' +
                 '- Alimentación regular\n' +
                 '- Visitas al veterinario\n' +
                 '- Mucho amor y atención';
    } else if (tipo === 'gatos') {
        mensaje = '¡Los gatos son mascotas fascinantes! Necesitan:\n' +
                 '- Espacio para jugar\n' +
                 '- Arenero limpio\n' +
                 '- Rascadores\n' +
                 '- Atención y cariño';
    }
    
    alert(mensaje);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
});

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});