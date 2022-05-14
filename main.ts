let score = 0
let coins = 0
music.baDing.play()
pause(5000)
if (coins > score) {
    scene.setBackgroundColor(15)
    game.over(false)
} else {
    music.pewPew.play()
    scene.setBackgroundColor(2)
}
game.onUpdate(function () {
	
})
