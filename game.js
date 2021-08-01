const game = new Phaser.Game(800,600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update, update
})
// images
function preload () {
    game.load.image('sky', 'resources\sky.png')
    game.load.image('ground', 'resources\platform.png')
    game.load.image('diamond', 'resources\diamond.png')
    game.load.spritesheet('pig', 'resources\pig.png', 42, 42)
}
function create () {}
function update () {}