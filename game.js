const game = new Phaser.Game(800,600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update, update
})
let score = 0
let scoreText
let platforms
let cursors
let player
let diamonds
// images
function preload () {
    game.load.image('sky', 'C:\Annamalai\2021 Summer semester\Web Game Development\8-phaser-game-subrama2\resources\sky.png')
    game.load.image('ground', 'resources\platform.png')
    game.load.image('diamond', 'resources\diamond.png')
    game.load.spritesheet('pig', 'resources\pig.png', 32, 32)
}
function create () {
    game.physics.startSystem(Phaser.Physics.ARCADE)


    game.add.sprite(0, 0, 'sky')

    platforms = game.add.group()
    platforms.enableBody = true

    let ground = platforms.create(0,game.world.height - 64, 'ground')
    ground.scale.setTo(2,2)
    ground.body.immovable = true

    let ledge = platforms.create(400,450, 'ground')
    ledge.body.immovable = true

    ledge = platforms.create(-75,350, 'ground')
    ledge.body.immovable = true
    //added the player
    player = game.add.sprite(32, game.world.height - 150, 'pig')
    game.physics.arcade.enable(player)
    // added jump and gravity settings
    player.body.gravity.y = .2  
    player.body.gravity.y = 800
    player.body.collideWorldBounds = true //keeps him in the world
     //the goal of the game
     player.animations.add('left', [0,1], 10,true)
     player.animations.add('right', [2,3], 10,true)

    diamonds = game.add.group()
    diamonds.enableBody = true
    //creates diamonds with a for loop
    for(var a = 0; a < 20; a++)
{
    let diamond = diamonds.create(a * 70,0, 'diamond')
    diamond.body.gravity.y = 1000
    diamond.body.bounce.y = .3 + Math.random() * .2
}
scoreText = game.add.text(16,16,'')
cursors = game.input.keyboard.createCursorKeys()
}
function update () {
    game.physics.arcade.collide(player, platforms)
    game.physics.arcade.collide(diamonds, platforms)
    game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this)
    player.body.velocity.x = 0

    if(cursors.left.isDown) {
        player.body.velocity.x = -150
        player.animations.play('left')   // how it handles sprites
    } else if(cursors.right.isDown) {
        player.body.velocity.x = 150
        player.animations.play('right')
    }else
    {
        player.animations.stop()
    }
    if(cursors.up.isDown && player.body.touching.down){
        player.body.velocity.y = -400
    }

    if (score === 200)  // max  score
    {
        alert("you win congrats")
        score = 0
    }
}
function collectionDiamond(player, diamond) {
    diamond.kill()

    score += 10
    scoreText.text = 'Score' + score

}