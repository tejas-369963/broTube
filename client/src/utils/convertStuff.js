const convertViews = (v) => {

	const res = v;

	if(v.length > 6){
		return `${v.slice(0, v.length-6)}M`
	}
	else if(v.length > 3){
		return `${v.slice(0, v.length-3)}K`
	}

	return res
}

const convertDate = (d) => {
	let res;

	let now = new Date()

	let v = new Date(d)

	res = Math.floor(now.getTime() / 1000) - Math.floor(v.getTime() / 1000)

	let con

	if(Math.floor(res / 60 / 60 / 24 / 30) > 0 ){
		con = Math.floor(res / 60 / 60 / 24 / 30)
		let months = con > 1 ? "months" : "month"
		res = `${con} ${months} ago`
	}

	else if(Math.floor(res / 60 / 60 / 24 / 7) > 0 ){
		con = Math.floor(res / 60 / 60 / 24 / 7)
		let weeks = con > 1 ? "weeks" : "week"
		res = `${con} ${weeks} ago`
	}

	else if(Math.floor(res / 60 / 60 / 24) > 0 ){
		con = Math.floor(res / 60 / 60 / 24)
		let days = con > 1 ? "days" : "day"
		res = `${con} ${days} ago`
	}

	else if(Math.floor(res / 60 / 60) > 0 ){
		con = Math.floor(res / 60 / 60)
		let hours = con > 1 ? "hours" : "hour"
		res = `${con} ${hours} ago`
	}

	else if(Math.floor(res / 60 ) > 0 ){
		con = Math.floor(res / 60 )
		let minutes = con > 1 ? "minutes" : "hour"
		res = `${con} ${minutes} ago`
	}

	return res

}
const convertDateToString = (d) => {
	
    const givenDate = new Date(d)

    const stringifiedDate = givenDate.toString()

    const temp = stringifiedDate.split(" ")

    const res = `${temp[2]} ${temp[1]} ${temp[3]}`

	return res
}

const convertDuration = (d) => {

    const aD = d.slice(2, d.length - 1)

	const bD = aD.split("H")

	let temp = 0

    if(bD.length > 1){
		temp = bD[1].split("M")
	}
	else{
		temp = bD[0].split("M")
	}

    const res = `${bD.length > 1 ? `${bD[0]}:` :  ""}${temp[0]}:${temp[1] - "9" > 0 ? `${temp[1] || 0}` : `0${temp[1] || "0"}`}`

	return res
}



export{
    convertDate,
    convertDateToString,
    convertViews,
	convertDuration
}