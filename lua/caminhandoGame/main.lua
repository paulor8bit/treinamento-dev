require("player")

function love.load()
    player.load()
end

function love.update(dt)
    player.update(dt)
end

function love.draw()
    player.draw()
end