const box = document.querySelector('.box');
const box1 = document.querySelector('.box.box1');

console.log(box1);

function boxMoving(el){
    el.onmousedown = function(event) {

        el.style.position = 'absolute';
        el.style.zIndex = 1000;

        document.body.append(el);

        function moveAt(pageX, pageY) {
            el.style.left = pageX - el.offsetWidth / 2 + 'px';
            el.style.top = pageY - el.offsetHeight / 2 + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        el.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
        };

        el.ondragstart = function() {
            return false;
        };
    };

}

boxMoving(box);
boxMoving(box1);

