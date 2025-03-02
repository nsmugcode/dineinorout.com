var snarkThinking = Array(
	"Thinking really really hard...",
	"Spinning up 15 nodes, 20 CDNs, and 5 windmills...",
	"Analyzing the collected works of Shakespeare...",
	"Reading all available tweets since 2006...",
	"Recreating universe inside of a pocket dimension on Server Ceti Alpha V...",
	"Contacting the great beyond...on hold..."
)
makeDecision()
function makeDecision(){
	var decisionStatus = document.getElementById("decision-status")
	var decisionChatElement = document.getElementById("decision-chat-log")
	var advancedMode = document.getElementById("advanced-ai-source").checked

	var decisionModelVersion = 2000
	if (advancedMode){
		decisionModelVersion = 4000
	}

	var status = snarkThinking[getRandomInt(snarkThinking.length)]
	console.log(status)
	decisionChatElement.innerHTML = "<i>"+status+"</i>"
	decisionStatus.innerHTML = ""
	setTimeout(()=>{
		var decision = getRandomInt(100)
		var finalDecision = "You should eat in!"
		decisionStatus.style["color"] = "blue"
		if (decision % 2 === 0) {
			finalDecision = "You should eat out!"
			decisionStatus.style["color"] = "green"
		}
		console.log(decision)
		decisionStatus.style["font-size"] = "28px"
		decisionStatus.innerHTML = finalDecision
	},decisionModelVersion)
}
function getRandomInt(max){
	return Math.floor(Math.random() * max)
}
function decideAgain(){
	makeDecision()
}