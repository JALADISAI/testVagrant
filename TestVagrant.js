const data = {
	GT: {
		name: `GT`,
		points: 20,
		lastFiveResult: [`W`,`W`,`L`,`L`,`W`]
	},
	LSG: {
		name: `LSG`,
		points: 18,
		lastFiveResult: [`W`,`L`,`L`,`W`,`W`]
	},
	RR: {
		name: `RR`,
		points: 16,
		lastFiveResult: [`W`,`L`,`W`,`L`,`L`]
	},
	DC: {
		name: `DC`,
		points: 14,
		lastFiveResult: [`W`,`W`,`L`,`W`,`L`]
	},
	RCB: {
		name: `RCB`,
		points: 14,
		lastFiveResult: [`L`,`W`,`W`,`L`,`L`]
	},
	KKR: {
		name: `KKR`,
		points: 12,
		lastFiveResult: [`L`,`W`,`W`,`L`,`W`]
	},
	PBKS: {
		name: `PBKS`,
		points: 12,
		lastFiveResult: [`L`,`W`,`L`,`W`,`L`]
	},
	SRH: {
		name: `SRH`,
		points: 12,
		lastFiveResult: [`W`,`L`,`L`,`L`,`L`]
	},
	CSK: {
		name: `CSK`,
		points: 8,
		lastFiveResult: [`L`,`L`,`W`,`L`,`W`]
	},
	MI: {
		name: `MI`,
		points: 6,
		lastFiveResult: [`L`,`W`,`L`,`W`,`W`]
	}
}


//retrieve the teams that have 2 consecutive losses
const getTeamsTwoLoss = () => {
	const res = [];
	for(let key in data) {
		const teamResult = data[key].lastFiveResult;
		if(teamResult.join(``).indexOf(`LL`) >= 0) {
			res.push(data[key])
		}
	}
	console.log(getAvg(res));
	return res;
}


// get teams that have n consecutive losses/wins.

const getConsecutiveLW = (n, matchResult) => {
	const res = [];
	const text = Array(n).fill(matchResult).join(``);
	for(let key in data) {
		const teamResult = data[key].lastFiveResult;
		if(teamResult.join(``).indexOf(text) >= 0) {
			res.push(data[key])
		}
	}
	console.log(getAvg(res));
	return res;
}

//  average points of the filtered teams

const getAvg = (arr) => {
	let sum = 0;
	arr.forEach((item) => {
		sum += item.points;
	})
	return (sum/arr.length).toFixed(2)
}


// console.log(getConsecutiveLW(2, `L`));
// getTeamsTwoLoss()




