let theWheel = new Winwheel({
    'numSegments'       : 8,
    'drawMode'          : 'segmentImage',
    'segments'          :
    [
       {'image' : 'images/spaghette.png'},
       {'image' : 'images/soucess.png'},
       {'image' : 'images/soup.png'},
       {'image' : 'images/creep.png'},
       {'image' : 'images/sandwich.png'},
       {'image' : 'images/meat.png'},
       {'image' : 'images/Omlet.png'},
       {'image' : 'images/burgur.png'}
    ]
});
const $ = ele => document.querySelectorAll(ele);
let buttons = $('table.power tr td');
for (let i = 0; i < buttons.length; i++){
    buttons[i].classList.add(`butt${i}`);
    buttons[i].onclick = function () {
        $('.selected')[0] ? $('.selected')[0].classList.remove('selected') : 0;
        this.classList.add('selected');
    }
}
const
    startSpin = () => {
        $('#canvas')[0].style.transitionDuration = '5s';
        $('#canvas')[0].style.transform = `rotate(${(360 * ((1 + 2 * parseInt([...$('.selected')[0].classList[0]].pop())) + 16 * Math.round(Math.random() * 10))) /16}deg)`;
    },
    resetWheel = () => {
        $('#canvas')[0].style.transitionDuration = '0s';
        $('#canvas')[0].style.transform = 'rotate(0deg)';
    };
