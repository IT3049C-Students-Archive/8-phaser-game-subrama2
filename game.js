

const game = new Phaser.Game(800,600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update, update
})
// images
function preload () {
    game.load.image('sky', 'C:\Annamalai\2021 Summer semester\Web Game Development\8-phaser-game-subrama2\resources\sky.png')
    game.load.image('ground', 'resources\platform.png')
    game.load.image('diamond', 'resources\diamond.png')
    game.load.spritesheet('pig', 'resources\pig.png', 32, 32)
}
function create () {
    game.physics.startSystem(Phaser.Physics.ARCADE)


    game.add.sprite(0,0, 'sky')

    platforms = game.add.group()
    platforms.enableBody() = true

    let ground = platforms.create(0,game.world.height - 64, 'ground')
    ground.scale.setTo(2,2)
    ground.body.immovable = true

    let ledge = platforms.create(400,450, 'ground')
    ledge.body.immovable = true

    ledge = platforms.create(-75,350, 'ground')
    ledge.body.immovable = true

    player = game.add.sprite(32, game.world.height - 150, 'pig')
    game.physics.arcade.enable(player)

}
function update () {}