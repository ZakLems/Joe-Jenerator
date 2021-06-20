"use strict";

var brain = require("./brain.js");
var fs = require("fs");

var json = require("./data/trainingData.json");
var joeWords = json.joeData;
function splitDataIntoArray(data) {
	return data.split("cumquad555");
}
const joeSays = splitDataIntoArray(joeWords);
let trainingData = [];
for (let i = 0; joeSays.length; i++) {
	trainingData.push({
		input: `${joeSays[i]}`,
		output: "joe",
	});
}

console.log(joeSays.length);
console.log(trainingData.length);

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
	m;
}
/*
trainingData = shuffle(trainingData);

console.log(trainingData);

const net = new brain.recurrent.LSTM({});
console.log(net.hiddenLayers);
net.train(trainingData, { log: true, logPeriod: 1, errorThresh: 0.07 });

fs.writeFileSync("trained-net.json", JSON.stringify(net.toJSON()));*/
