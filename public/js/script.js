const links = document.getElementsByClassName('scroll');
console.log(links);
for (let index = 0; index < links.length; index++) {
    const element = links[index];
    element.addEventListener('click', ()=>{
        let src = element.getAttribute('href');
        let id = src.slice(2);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    })    
}
const about = document.getElementById('bout');
const films = document.getElementById('ilms');
const charity = document.getElementById('harity');
const research = document.getElementById('esearch');
const lives = document.getElementById('ives');

// about.addEventListener("mouseenter", ()=>{
//     let l1 = document.getElementById('li1');
//     l1.classList.add('active')    
// })
// about.addEventListener("mouseleave", ()=>{
//     let l1 = document.getElementById('li1');
//     l1.classList.remove('active');
// })
// films.addEventListener("mouseenter", ()=>{
//     let l2 = document.getElementById('li2');
//     l2.classList.add('active')
// })
// films.addEventListener("mouseleave", ()=>{
//     let l2 = document.getElementById('li2');
//     l2.classList.remove('active');
// })
// charity.addEventListener("mouseenter", ()=>{
//     let l3 = document.getElementById('li3');
//     l3.classList.add('active')
// })
// charity.addEventListener("mouseleave", ()=>{
//     let l3 = document.getElementById('li3');
//     l3.classList.remove('active');
// })
// research.addEventListener("mouseenter", ()=>{
//     let l4 = document.getElementById('li4');
//     l4.classList.add('active')
// })
// research.addEventListener("mouseleave", ()=>{
//     let l4 = document.getElementById('li4');
//     l4.classList.remove('active');
// })
// lives.addEventListener("mouseenter", ()=>{
//     let l5 = document.getElementById('li5');
//     l5.classList.add('active')
// })
// lives.addEventListener("mouseleave", ()=>{
//     let l5 = document.getElementById('li5');
//     l5.classList.remove('active');
// })
const nav = document.getElementsByTagName('nav')[0]; 
console.log(nav);

$(window).scroll(function(){
    if($(this).scrollTop()>window.innerHeight){
        nav.classList.remove('background-initial');
        nav.classList.add('background-change', 'navbar-dark');
    } else{
        nav.classList.remove('background-change', 'navbar-dark');
        nav.classList.add('background-initial');
    }
    
})

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    console.log('SD',scrollDistance)
    if(scrollDistance<window.innerHeight){
        $('.nav-item.active').removeClass('active');
    }
    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.row').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                console.log(i, $(this).position().top);
                console.log('scrolld',scrollDistance);
                    $('.nav-item.active').removeClass('active');
                    $('.nav-item').eq(i).addClass('active');
            }
    });
}).scroll();