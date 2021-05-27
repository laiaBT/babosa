controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 2 1 2 5 5 5 5 5 5 
        5 5 5 5 5 5 5 2 1 2 5 5 5 5 5 5 
        5 5 5 5 5 5 5 2 1 2 5 5 5 5 5 5 
        5 5 5 5 5 5 5 3 1 3 5 5 5 5 5 5 
        5 5 5 5 5 5 5 3 1 3 2 5 5 5 5 5 
        5 5 5 5 5 5 2 1 1 1 2 5 5 5 5 5 
        5 5 5 5 5 5 2 1 1 1 3 5 5 5 5 5 
        5 5 5 5 5 5 3 1 1 1 3 5 5 5 5 5 
        5 5 5 5 5 5 3 1 1 1 3 5 5 5 5 5 
        5 5 5 5 5 5 3 1 1 1 3 5 5 5 5 5 
        5 5 5 5 5 5 2 3 1 3 2 5 5 5 5 5 
        5 5 5 5 5 5 5 2 2 2 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, babosa, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    amazon.destroy()
    amazon.destroy(effects.disintegrate, 1000)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let amazon: Sprite = null
let projectile: Sprite = null
let babosa: Sprite = null
game.splash("a lataque ")
effects.clouds.startScreenEffect()
babosa = sprites.create(img`
    .................ccfff..............
    ................cddbbf..............
    ...............cddbbf...............
    ..............fccbbcf............ccc
    .......2ffffffccccccff.........ccbbc
    ......ffbbbbbbbbbbbbbcfff.....cdbbc.
    ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
    ....fbbb1111ff1bcbcbbbcccccccbbbcf..
    .....fb11111111bbbbbbcccccccccbccf..
    ......fccc33cc11bbbbccccccccfffbbcf.
    .......fc131c111bbbcccccbdbc...fbbf.
    ........f33c111cbbbfdddddcc.....fbbf
    .........ff1111fbdbbfddcc........fff
    ...........cccccfbdbbfc.............
    .................fffff..............
    `, SpriteKind.Player)
babosa.setPosition(74, 110)
controller.moveSprite(babosa, 100, 0)
babosa.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    amazon = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b a c . . . . . . 
        . . . . c c b c f a c . . . . . 
        . . . . a f b b b a c . . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c . . . . . 
        . . . . . b b a f a . . . . . . 
        . . . . . . c b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    amazon.x = randint(0, scene.screenWidth())
    amazon.setKind(SpriteKind.Enemy)
})
