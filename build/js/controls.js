// Component to change to random color on click.
// AFRAME.registerComponent('laptop-cl', {
//     init: function () {
//         var elem = document.getElementById("changecamera");
//         var state = "ground";
//
//         this.el.addEventListener('click', function (evt) {
//             if (state == "air") {
//                 elem.setAttribute('position', "0 1.8 -1");
//                 elem.setAttribute('rotation', "0 -180 0");
//                 state = "ground";
//             } else {
//                 elem.setAttribute('position', "0 19 -1");
//                 elem.setAttribute('rotation', "-50 -180 0");
//                 state = "air";
//             }
//            // console.log('I was clicked at: ', evt.detail.intersection.point);
//         });
//     }
// });

AFRAME.registerComponent('left-pos', {
    init: function () {
        var elem = document.getElementById("changecamera");
        this.el.addEventListener('click', function (evt) {
                elem.setAttribute('position', "10 1.8 -3");
        });
    }
});

AFRAME.registerComponent('mid-pos', {
    init: function () {
        var elem = document.getElementById("changecamera");
        this.el.addEventListener('click', function (evt) {
                elem.setAttribute('position', "0 1.8 -1");
        });
    }
});

AFRAME.registerComponent('mid-front-right-pos', {
    init: function () {
        var elem = document.getElementById("changecamera");
        this.el.addEventListener('click', function (evt) {
                elem.setAttribute('position', "-4 1.8 6");
        });
    }
});

AFRAME.registerComponent('mid-front-left-pos', {
    init: function () {
        var elem = document.getElementById("changecamera");
        this.el.addEventListener('click', function (evt) {
                elem.setAttribute('position', "4 1.8 6");
        });
    }
});

AFRAME.registerComponent('right-pos', {
    init: function () {
        var elem = document.getElementById("changecamera");
        this.el.addEventListener('click', function (evt) {
                elem.setAttribute('position', "-10 1.8 -3");
        });
    }
});

AFRAME.registerComponent('top-pos', {
    init: function () {
        var elem = document.getElementById("changecamera");
        this.el.addEventListener('click', function (evt) {
                elem.setAttribute('position', "0 19 -1");
        });
    }
});

// Component to change to random color on click.
AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            var getId = evt.srcElement.id;
            cleanScene(getId);
        });
    }
});
