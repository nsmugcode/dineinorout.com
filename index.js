var snarkThinking = Array(
	"Thinking really really hard...",
	"Spinning up 15 nodes, 20 CDNs, and 5 windmills...",
	"Analyzing the collected works of Shakespeare...",
	"Reading all available tweets since 2006...",
	"Recreating universe inside of a pocket dimension on Server Ceti Alpha V...",
	"On hold with the great beyond..."
)
makeDecision()
function makeDecision(){
	var decisionStatus = document.getElementById("llm-chat-action")
	var decisionChatElement = document.getElementById("llm-chat-log")
	var advancedMode = document.getElementById("advanced-ai-source").checked

	var decisionModelVersion = 1500
	if (advancedMode){
		decisionModelVersion = 3500
	}

	var status = snarkThinking[getRandomInt(snarkThinking.length)]
	decisionChatElement.innerHTML = "<i>APAILLM: "+status+"</i>"
	decisionStatus.innerHTML = ""
	setTimeout(()=>{
		var decision = getRandomInt(100)
		var finalDecision = "You should eat in!"
		if (decision % 2 === 0) {
			finalDecision = "You should eat out!"
		}
		decisionStatus.innerHTML = "<i>APAILLM</i>: <b>"+finalDecision+"</b>"
	},decisionModelVersion)
}
function getRandomInt(max){
	return Math.floor(Math.random() * max)
}
function decideAgain(){
	makeDecision()
}