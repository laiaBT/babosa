game.splash("a lataque ")
effects.clouds.startScreenEffect()
let babosa = sprites.create(img`
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
babosa.setPosition(148, 53)
controller.moveSprite(babosa, 100, 100)
babosa.setStayInScreen(true)
game.onUpdateInterval(500, function () {
	
})
