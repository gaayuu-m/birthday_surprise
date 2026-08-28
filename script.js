const total = 8;
let popped = 0;


// SCREEN FUNCTION

function show(number) {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById("s" + number).classList.add("active");
}


// START

document.getElementById("startBtn").onclick = function() {
    show(2);
};


// READY

document.getElementById("readyBtn").onclick = function() {
    show(3);
    makeBalloons();
};


// CREATE BALLOONS

function makeBalloons() {

    const area = document.getElementById("balloons");

    area.innerHTML = "";

    popped = 0;

    document.getElementById("continueBtn")
        .classList.add("hidden");

    const colors = [
        "#ff69b4",
        "#ff8cc6",
        "#c77dff",
        "#a66cff",
        "#ff7f9f",
        "#ffb3d9"
    ];

    for(let i = 0; i < total; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left =
            (5 + Math.random() * 85) + "%";

        balloon.style.bottom =
            Math.random() * 100 + "px";

        balloon.style.background =
            colors[Math.floor(Math.random() * colors.length)];


        balloon.onclick = function() {

            if(balloon.dataset.popped) return;

            balloon.dataset.popped = "yes";

            balloon.style.display = "none";

            popped++;

            if(popped === total) {

                document.getElementById("continueBtn")
                    .classList.remove("hidden");

            }
        };

        area.appendChild(balloon);
    }
}


// CONTINUE

document.getElementById("continueBtn").onclick = function() {

    show(4);

    typeMessage();
};


// MESSAGE

const text = `
My dearest Dudu ❤️

Happy Birthday to the person who holds such a special place in my heart.

Sometimes words are not enough to explain how much you mean to me.

Thank you for every smile, every memory, every little moment and every feeling that makes our story special.

I hope this birthday brings you happiness, peace, success and everything your heart wishes for.

I hope we create many more beautiful memories together.

You are loved.
You are precious.
And you will always be my Dudu. ❤️

Happy Birthday, Sulaiman.

I love you more than words can explain.

Today, tomorrow and always. ❤️

— Gayathri
`;

function typeMessage() {

    const element = document.getElementById("message");

    element.innerHTML = "";

    let i = 0;

    function type() {

        if(i < text.length) {

            element.innerHTML +=
                text[i] === "\n"
                ? "<br>"
                : text[i];

            i++;

            setTimeout(type, 15);
        }
    }

    type();
}


// MEMORIES

document.getElementById("messageBtn").onclick = function() {
    show(5);
};


// REASONS

document.getElementById("reasonsBtn").onclick = function() {
    show(6);
};


// REASON BUTTONS

document.querySelectorAll(".reasons button").forEach(function(button) {

    button.onclick = function() {

        button.classList.toggle("open");

    };

});


// LAST SURPRISE

document.getElementById("lastBtn").onclick = function() {
    show(7);
};


// FINAL

document.getElementById("finalBtn").onclick = function() {

    show(8);

    fireworks();

};


// FIREWORKS

function fireworks() {

    for(let i = 0; i < 30; i++) {

        const item = document.createElement("div");

        item.innerHTML = "✨";

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "%";
        item.style.top = Math.random() * 100 + "%";
        item.style.fontSize = "30px";
        item.style.zIndex = "1000";
        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        setTimeout(function() {
            item.remove();
        }, 2500);
    }
}