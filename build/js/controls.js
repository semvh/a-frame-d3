// Component to change to random color on click.
AFRAME.registerComponent('laptop-cl', {
    init: function () {
        var elem = document.getElementById("changecamera");
        var state = "ground";

        this.el.addEventListener('click', function (evt) {
            if (state == "air") {
                elem.setAttribute('position', "0 1.8 -1");
                elem.setAttribute('rotation', "0 -180 0");
                state = "ground";
            } else {
                elem.setAttribute('position', "0 19 -1");
                elem.setAttribute('rotation', "-50 -180 0");
                state = "air";
            }
            console.log('I was clicked at: ', evt.detail.intersection.point);
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
