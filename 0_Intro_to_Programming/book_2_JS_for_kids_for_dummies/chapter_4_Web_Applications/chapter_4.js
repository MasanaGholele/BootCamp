
YUI().use('node', 'anim', 'anim-node-plugin', function (Y) {

    var o = Y.one('#o'),
        oW = o.get('offsetWidth'),
        oH = o.get('offsetHeight'),
        max = 36,
        min = 12,
        bubbles = 100,
        timerDelay = 8000;


    function makeBubble() {
        var b = Y.Node.create('<span class="bubble"></span>');

        b.plug(Y.Plugin.NodeFX, {
            duration: 7,
            easing: Y.Easing.easeOut,
            to: {
                top: 0,
                opacity: 0
            },
            on: {
                end: function () {
                    Y.later(10000, this, function () {
                        animBubble(this.get('node'));
                    });
                }
            }
        });

        o.append(b);
        animBubble(b);
    }

    function animBubble(b) {
        var v = Math.floor(Math.random() * (max - min)) + min;

        b.setStyles({
            height: v + 'px',
            width: v + 'px',
            borderRadius: v + 'px',
            top: (oH + 2) + 'px',
            opacity: 1
        });

        b.setStyle('left', Math.floor(Math.random() * (oW - v)));

        b.fx.set('duration', Math.floor(Math.random() * 2 + 3));
        b.fx.set('to.top', Math.floor(Math.random() * (oH / 2)));


        b.fx.run();
    }

    for (i = 0; i < bubbles; i++) {
        Y.later(Math.random() * timerDelay, this, function () {
            makeBubble();
        });
    }

});
