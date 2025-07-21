const ageTag = document.getElementById('age-calc');
ageTag.innerText = (new Date().getFullYear() - 2002);

const scroller = document.querySelector('.scroller');

if (scroller) {
    const scrollerList = scroller.querySelector('ul');
    const scrollerListClone = scrollerList.cloneNode(true);
    scrollerListClone.setAttribute('aria-hidden', 'true');
    scroller.appendChild(scrollerListClone);
}