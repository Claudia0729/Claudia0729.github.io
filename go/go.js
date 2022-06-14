
function setup() {
    initializeFields();
    createCanvas(450, 450);
}

// 在java的陣列
var bx;

var by;

// 現在有N個旗子
var N;

function draw() {
    background(color(0xF5, 0xBE, 0x48));
    // line(0, 50, 450, 50);鷹架
    for (var y = 50; y < 450; y += 50) {
        line(0, y, 450, y);
    }
    // line( 50, 0, 50, 450);鷹架
    for (var x = 50; x < 450; x += 50) {
        line(x, 0, x, 450);
    }
    fill(0);
    for (var i = 0; i < N; i++) {
        if (// 2倍數,黑
        i % 2 == 0)
            // 2倍數,黑
            fill(0);
        else
            // 白
            fill(255);
        ellipse(bx[i], by[i], 40, 40);
    }
    if (// 2倍數,黑
    N % 2 == 0)
        // 2倍數,黑
        fill(0);
    else
        // 白
        fill(255);
    ellipse(mouseX, mouseY, 40, 40);
}

function mousePressed() {
    bx[N] = mouseX;
    by[N] = mouseY;
    N++;
}

function initializeFields() {
    bx = new Array(100);
    by = new Array(100);
    N = 0;
}
