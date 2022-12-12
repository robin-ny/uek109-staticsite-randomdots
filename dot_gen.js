let state = {
	board: [
	[ '', '', '', '', '', '', '' ],
	[ '', '', '', '', '', '', '' ],
	[ '', '', '', '', '', '', '' ],
	[ '', '', '', '', '', '', '' ],
	[ '', '', '', '', '', '', '' ],
	[ '', '', '', '', '', '', '' ]
	]
}

function elt (type, attrs, ...children) {
	let node = document.createElement(type)

	for (a in attrs) {
		node.setAttribute(a, attrs[a])
	}

	for (let child of children) {
		if (typeof child != "string") node.appendChild(child)
		else node.appendChild(document.createTextNode(child))
	}

	return node
}


function showBoard(){
	placeRandomTile()
	clearBoardDisplay()
	for(let r = 0; r<5;r++){
		for(let c = 0; c<7;c++){
			
			if(state.board[r][c] === 'b' || state.board[r][c] === 'r'){
				let child = document.createElement("div")
				child.setAttribute('class',state.board[r][c]+" piece")
				console.log(child)
				document.getElementsByClassName("board")[0].appendChild(elt("div",{'class':'field'},child))
			}

			else document.getElementsByClassName("board")[0].appendChild(elt("div",{'class':'field'}))
		}
	}
}

function clearBoardDisplay(){
	boardNode = document.getElementsByClassName('board')[0]
	if(boardNode.hasChildNodes()){
		boardNode.innerHTML = ''
	}
}



function placeRandomTile(){
	let row = getRandomArbitrary(0,5)
	let col = getRandomArbitrary(0,6)
	let val = Math.random()

	if(val>=0.3 && val < 0.6) val = 'b'
	else if(val>=0.6) val = 'r'
	else val = ''
	console.log(row)
	state.board[row][col] = val

}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

window.setInterval(showBoard, 1000)