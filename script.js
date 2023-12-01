function openMenu () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open')
}

function contactMe () {
     const mailAdress = "pshenavi2@gmail.com";
     const subject = encodeURIComponent("Hey Prathamesh I/We just want to connect with you!!");
     const link = `mailto:${mailAdress}?&subject=${subject}`;
     window.location.href = link;
}