let offset1 = 0;
const sliderLineLP = document.querySelector('.slider-lineLP')
let offset2 = -2091;
const sliderLineRP = document.querySelector('.slider-lineRP')

document.querySelector('.slider-buttonLP').addEventListener('click', function() {
    offset1 += 697
    if (offset1 > 2091){
        offset1 = 0
    }
    sliderLineLP.style.top = -offset1 + 'px';

    offset2 += 697
    if (offset2 > 0){
        offset2 = -2091
    }
    sliderLineRP.style.top = offset2 + 'px';
})

document.querySelector('.slider-buttonRP').addEventListener('click', function() {
    offset1 -= 697
    if (offset1 < 0){
        offset1 = 2091
    }
    sliderLineLP.style.top = -offset1 + 'px';

    offset2 -= 697
    if (offset2 < -2091){
        offset2 = 0
    }
    sliderLineRP.style.top = offset2 + 'px';
})