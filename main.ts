scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile58`, function (sprite, location) {
    if (0 < mySprite.ay) {
        mySprite.ay = -50
        mySprite.setImage(assets.image`myImage`)
    }
    tiles.setTileAt(location, assets.tile`myTile57`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (0 < mySprite.ay) {
        mySprite.ay = -300
        mySprite.setImage(assets.image`myImage0`)
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . f f f f f . 
            . f 1 1 1 1 1 f 
            . f 1 f 1 f 1 f 
            . f 1 f 1 f 1 f 
            . f 1 1 1 1 1 f 
            . f 1 f f f 1 f 
            . f 1 1 1 1 1 f 
            . . f f f f f . 
            . . . . f . . . 
            . . f f f f f . 
            . f f . f . f f 
            . f . . f . . f 
            . . . f f f . . 
            . . . f . f . . 
            . . . f . f . . 
            . . f f . f f . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    mySprite.setPosition(24, 200)
    info.changeScoreBy(1)
    mySprite2.setPosition(24, 200)
    tiles.setCurrentTilemap(tilemap`レベル15`)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    mySprite.setPosition(24, 80)
    info.changeScoreBy(1)
    mySprite2.setPosition(24, 80)
    tiles.setCurrentTilemap(tilemap`レベル13`)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (0 < mySprite.ay) {
        mySprite.ay = -300
        mySprite.setImage(assets.image`myImage`)
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
    tiles.setTileAt(location, assets.tile`myTile6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    mySprite.setPosition(24, 80)
    info.changeScoreBy(1)
    mySprite2.setPosition(24, 80)
    tiles.setCurrentTilemap(tilemap`レベル13`)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    if (0 < mySprite.ay) {
        mySprite.ay = -300
        mySprite.setImage(assets.image`myImage`)
    }
    tiles.setTileAt(location, assets.tile`myTile38`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    if (0 < mySprite.ay) {
        mySprite.ay = -300
        mySprite.setImage(assets.image`myImage`)
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
    tiles.setTileAt(location, assets.tile`myTile6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    mySprite.setPosition(24, 40)
    info.changeScoreBy(1)
    scene.setBackgroundColor(6)
    tiles.setCurrentTilemap(tilemap`レベル8`)
    mySprite2.setPosition(24, 40)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    mySprite.setPosition(24, 850)
    info.changeScoreBy(1)
    mySprite2.setPosition(24, 850)
    tiles.setCurrentTilemap(tilemap`レベル21`)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`レベル6`)
    info.changeScoreBy(1)
    mySprite.setPosition(24, 80)
    mySprite2.setPosition(24, 80)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    mySprite.setPosition(24, 80)
    scene.setBackgroundColor(11)
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`レベル18`)
    mySprite2.setPosition(24, 80)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    mySprite.setPosition(24, 80)
    info.changeScoreBy(1)
    mySprite2.setPosition(24, 80)
    tiles.setCurrentTilemap(tilemap`レベル23`)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    mySprite.setPosition(24, 80)
    scene.setBackgroundColor(11)
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`レベル18`)
    mySprite2.setPosition(24, 80)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    game.over(false, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
    tiles.setTileAt(location, assets.tile`myTile37`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    mySprite.setPosition(24, 480)
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`レベル10`)
    mySprite2.setPosition(24, 480)
    if (0 < mySprite.ay) {
    	
    } else {
        mySprite.ay = 300
        mySprite.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 f 1 f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . f 1 f f f 1 f . . . . 
            . . . . . f 1 1 1 1 1 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f f . f . f f . . . . 
            . . . . . f . . f . . f . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . f f . f f . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    game.over(false, effects.starField)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.ay < 0) {
        if (mySprite.isHittingTile(CollisionDirection.Top)) {
            mySprite.vy = 150
        }
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy = -150
        }
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . f f f f f . 
    . f 1 1 1 1 1 f 
    . f 1 f 1 f 1 f 
    . f 1 f 1 f 1 f 
    . f 1 1 1 1 1 f 
    . f 1 f f f 1 f 
    . f 1 1 1 1 1 f 
    . . f f f f f . 
    . . . . f . . . 
    . . f f f f f . 
    . f f . f . f f 
    . f . . f . . f 
    . . . f f f . . 
    . . . f . f . . 
    . . . f . f . . 
    . . f f . f f . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`レベル4`)
mySprite.setPosition(24, 80)
mySprite.ay = 300
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 4 . . . . . . 7 . . 5 . . . . 
    . . . e . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 4 . . 
    . 7 . . 5 . . . . . . . . . . . 
    . . . . . . 3 . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 . . . . . . . . . . . 
    . . . 4 . . 3 . . . . . . 5 . . 
    5 . . . . . . . . . . . . . . . 
    . . . . . . . . . 7 4 . . . . . 
    . e . . . . . . . . . . . . . . 
    . . . 4 . . . . . . . . . e . . 
    . . . . . . . . . . 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(24, 80)
mySprite2.follow(mySprite)
forever(function () {
    if (0 == info.score()) {
        music.playMelody("B F G - D A B A ", 400)
    }
    if (1 == info.score()) {
        music.playMelody("B F G - D A B A ", 500)
    }
    if (2 == info.score()) {
        music.playMelody("C5 G A - E B C5 B ", 600)
    }
    if (3 == info.score()) {
        music.playMelody("C5 G A - E B C5 B ", 800)
    }
    if (4 == info.score()) {
        music.playMelody("C5 G A - E B C5 B ", 1000)
    }
    if (5 == info.score()) {
        music.playMelody("C5 G A - E B C5 B ", 1300)
    }
    if (6 == info.score()) {
        music.playMelody("A E F - C G A G ", 300)
    }
    if (7 == info.score()) {
        music.playMelody("A E F - C G A G ", 400)
    }
    if (8 == info.score()) {
        music.playMelody("A E F - C G A G ", 600)
    }
})
