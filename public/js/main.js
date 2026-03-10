// JavaScript para ELECTRION - Funcionalidades básicas

document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Cambiar ícono
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });
    }
    
    // Cerrar menú móvil al hacer clic en un enlace
    const mobileLinks = document.querySelectorAll('#mobileMenu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });

    // Cerrar menú móvil al hacer scroll o al tocar fuera (para mejorar UX de header sticky)
    let lastScrollY = window.scrollY;
    
    function closeMobileMenu() {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    }

    window.addEventListener('scroll', function() {
        // Solo cerrar si hay un scroll significativo (más de 10px) para evitar cierres accidentales al tocar
        if (Math.abs(window.scrollY - lastScrollY) > 10) {
            closeMobileMenu();
            lastScrollY = window.scrollY;
        }
    }, { passive: true });

    // En dispositivos táctiles, el scroll puede no dispararse instantáneamente, cerramos cuando intentan arrastrar
    document.addEventListener('touchmove', function(e) {
        // No cerrar si están deslizando DENTRO del menú
        if (!mobileMenu.contains(e.target)) {
            closeMobileMenu();
        }
    }, { passive: true });
    
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Crear mensaje para WhatsApp
            const serviceText = service ? `Servicio: ${getServiceText(service)}\n` : '';
            const whatsappMessage = `Hola ELECTRION, me interesa solicitar una cotización:\n\n*Nombre:* ${name}\n*Teléfono:* ${phone}\n${serviceText}*Mensaje:* ${message}`;
            
            // Codificar mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Redirigir a WhatsApp
            window.open(`https://wa.me/51951413458?text=${encodedMessage}`, '_blank');
            
            // Opcional: Mostrar mensaje de confirmación
            alert('Serás redirigido a WhatsApp para completar tu solicitud. ¡Gracias!');
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
    
    // Función helper para obtener texto del servicio
    function getServiceText(serviceValue) {
        const services = {
            'residencial': 'Instalaciones Residenciales',
            'industrial': 'Sistemas Industriales', 
            'automatizacion': 'Automatización y Control',
            'mantenimiento': 'Mantenimiento Especializado',
            'otros': 'Otros Servicios'
        };
        return services[serviceValue] || serviceValue;
    }
    
    // Efecto de aparición suave al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('section, .bg-white, .bg-gray-50');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});