const blocks = document.querySelectorAll('.block');

const activateBlocks = () => {
    const bottom = window.innerHeight / 5 * 4;

    blocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;

        if (blockTop < bottom) {
            block.classList.add('active');
        } else {
            block.classList.remove('active');
        }
    });
};

activateBlocks();

window.addEventListener('scroll', activateBlocks);