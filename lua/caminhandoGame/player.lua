player = {}

function player.load()
    player.width = 50
    player.height = 100
    player.x = 100
    player.y = 300
    player.speed = 300
end

function player.update(dt)
    if love.keyboard.isDown("a" or "left" ) then
        player.x = player.x - (player.speed * dt)

    elseif love.keyboard.isDown("d") then
        player.x = player.x + (player.speed * dt)


    elseif love.keyboard.isDown("w") then
        player.y = player.y - (player.speed * dt)

    elseif love.keyboard.isDown("s") then
        player.y = player.y + (player.speed * dt)
    end
end


function player.draw()
    love.graphics.rectangle("fill", player.x, player.y, player.width, player.height)
    
end