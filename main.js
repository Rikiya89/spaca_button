'use strict';

{
    document.querySelector('#btn').addEventListener('click', function () {
        const space = ['🌎','🌙','🌟','🚀','🌕','🪐'];
        const random = Math.floor(Math.random() * space.length);
        console.log(random);
        document.querySelector('#btn').textContent = space[random];
    })
}