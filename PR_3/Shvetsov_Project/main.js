window.addEventListener('load', function () {
    var d = document,
        secret = d.getElementById('secret'),
        hint = d.getElementById('hint'),
        letter = d.getElementById('letter'),
        tryit = d.getElementById('tryit'),
        again = d.getElementById('again'),
        numRetries = d.getElementById('numretries'),
        res = d.getElementById('result');

    var poleChudes = {
        words: [
            ['кошка', 'Мяукающее животное'],
            ['собака', 'И лает, и кусает'],
            ['колибри', 'Эта птица может летать спиной вперед'],
            ['бергамот', 'Цитрусовое дерево с ароматными цветками'],
            ['вратарь', 'Так в старину называли сторожа городских ворот']
        ],
        selected: null,
        getWord: function () {
            this.selected = this.words[Math.floor(Math.random() * this.words.length)];
        },
        checkLetter: function () {
            var chr = letter.value.toLowerCase(),
                cur = secret.value,
                i = 0,
                str = '';
            for (; i < this.selected[0].length; i++) {
                str += this.selected[0][i] == chr ? chr : cur[i];
            }
            letter.value = '';
            secret.value = str;
            this.counter();
            if (str == this.selected[0]) this.finish();
        },
        counter: function () {
            numRetries.value = +numRetries.value + 1;
        },
        finish: function () {
            res.querySelector('label').textContent = 'Поздравляем! Количество попыток:';
            res.style.display = 'block';
        },
        init: function () {
            res.style.display = 'none';
            numRetries.value = 0;
            var word = this.getWord();
            secret.value = Array(this.selected[0].length + 1).join('*');
            hint.textContent = this.selected[1];
        },
    };
    poleChudes.init();
    tryit.addEventListener('click', function () {
        poleChudes.checkLetter();
    }, false);
    again.addEventListener('click', function () {
        poleChudes.init();
    }, false);

}, false);