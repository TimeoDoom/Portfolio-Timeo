// Intersection reveal
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('active');
      });
    },{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    // Smooth scroll for nav
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = a.getAttribute('href');
        if(id === '#') return;
        document.querySelector(id).scrollIntoView({behavior:'smooth',block:'start'});
      })
    });

    // Micro interactions: button tilt
    document.querySelectorAll('.btn').forEach(b=>{
      b.addEventListener('pointermove', (ev)=>{
        const r = b.getBoundingClientRect();
        const x = (ev.clientX - r.left - r.width/2)/r.width*24;
        const y = (ev.clientY - r.top - r.height/2)/r.height*24;
        b.style.transform = `perspective(600px) rotateX(${ -y }deg) rotateY(${ x }deg) translateZ(0)`;
      });
      b.addEventListener('pointerleave', ()=> b.style.transform='');
    });


    // Mobile menu toggle

    const burger=document.querySelector('.burger');
    const mobileMenu=document.querySelector('.mobile-menu');
    burger.addEventListener('click',()=>{
      burger.classList.toggle('active');
      mobileMenu.style.display=mobileMenu.style.display==='flex'?'none':'flex';
    });
