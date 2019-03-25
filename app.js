var orgArr = ['壹','壹','貳','貳','叄','叄','肆','肆']; //declaring an array of items that will be hiding under the cuts in the memory game
var memValues = []; //creating an empty array that will hold on the memory values
var tileIds = []; // creating another empty array to store tile ids

/* fisher yates shuffling method*/
let shuffler = function(arr) {
    let newPos, temp;

    for(let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i+1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
        }
        return arr;
};

// let newArray = shuffler(arry);
// console.log(newArray);

//Function for generating a new board.
function startBoard(){
	tiles_flipped = 0;
	var output = '';
  shuffler(orgArr); //took the array created on line 1 and ran the shuffle  method on it.

  //for(var i = orgArr.length; i > 0; i--)

  for(let i = 0; i < orgArr.length; i++) //ran a for loop over the length of the array
  {
		output += '<div id="tile_'+i+'" onclick="flipper(this,\''+orgArr[i]+'\')"></div>'; /*dynamuically output divs which represent the tiles and assign tile_ids starting from 0 and increment till max number of array length is reached. The tiles have an an onclick event that runs a function Flipper() and it sends in 2 variables/arguments, "this" which represent a div being accessed and the items in the array decleared in line 1.*/
	}
	document.getElementById('board').innerHTML = output;
}
function flipper(tile,val){
	if(tile.innerHTML == "" && memValues.length < 2){ // check to see if tile value is empty  and memValue is less than 2.
		tile.style.background = '#FFF'; // background colour of tile changes to white when clicked. 
		tile.innerHTML = val; //place the value in the innerHTML of the tile
		if(memValues.length == 0){ //evaluate the length of memValues to see if it's equall to 0 and if it's zero because it starts empty by default and if it's zero it pushes the new value into the into the memValues array below  then in the tile_ids we push the new tile.id  the one the user is clicking.
			memValues.push(val);
			tileIds.push(tile.id);
		} else if(memValues.length == 1){ //this  runs when 1 tile has already been flipped.
			memValues.push(val);
			tileIds.push(tile.id);
			if(memValues[0] == memValues[1]){ //use an if condition to compare the values of  the 2 tiles that have been flipped and if their value is equal
				tiles_flipped += 2;
				memValues = [];
        			tileIds = [];
				if(tiles_flipped == orgArr.length){ //if the value of tiles flipped is equal to the length of the array then reset the game.

				function resetGame(){
				let output = '<h1>🥇<u>Congrats you have won | 你赢了</u>🏆</h1></br><button onclick="startBoard()">Load New Game...</button>';
				return output
				}
				document.getElementById('board').innerHTML = resetGame();
				}
			} else {
				function flipBack(){ //flip back when the value of 2 tiles do not equal each other.
				    var tile_1 = document.getElementById(tileIds[0]);
				    var tile_2 = document.getElementById(tileIds[1]);
				    tile_1.style.background = 'url(https://i.imgur.com/3mIrLAj.png) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(https://i.imgur.com/3mIrLAj.png) no-repeat';
            	    tile_2.innerHTML = "";
				    memValues = [];
            	    tileIds = [];
				}
				setTimeout(flipBack, 1400);
			}
		}
	}
}
//window.onload = startBoard();
