const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
character.style.zIndex = '1' //implemented basic z-Index to get link to appear in front of objects, but not sure how to apply it so that he looks to be running in front of some and behind others, as well as give the illution that at a certain point, it would appear he can walk behind that object. Brain is fried, this one was a doozy.

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)


function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
          element.style.left = left + 'px'
          element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
      let direction = null;
      let x = left;
      let y = bottom;
  
      element.style.left = x + 'px'
      element.style.bottom = y + 'px'
      
      function moveCharacter(){ 
          if(direction === 'west'){
              x-=1
          }
          if(direction === 'north'){
              y+=1
          }
          if(direction === 'east'){
              x+=1
          }
          if(direction === 'south'){
              y-=1
          }
          element.style.left = x + 'px'
          element.style.bottom = y + 'px'
      }
      
      setInterval(moveCharacter, 1)
      
      document.addEventListener('keydown', function(e){
          if(e.repeat) return;
      
          if(e.key === 'ArrowLeft'){
              direction = 'west'
          }
          if(e.key === 'ArrowUp'){
              direction = 'north'
          }
          if(e.key === 'ArrowRight'){
              direction = 'east'
          }
          if(e.key === 'ArrowDown'){
              direction = 'south'
          }
          callback(direction)
      })
      
      document.addEventListener('keyup', function(e){
          direction = null
          callback(direction)
      })
  }
  
    return {
          to: moveToCoordinates,
          withArrowKeys: moveWithArrowKeys
    }
}



move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(550, 350) //adjusted x value to attempt to give depth to tree and pillar, but unsure how to get z-index to apply to just one object using js
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)