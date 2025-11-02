const convertViews = (v) => {

	if(!v) return
	
	const res = v;

	if (v.length > 9) {
		return `${v.slice(0, v.length - 9)}${v.length - 9 < 2 ? v[1] == 0 || (v[1] < 5 && v[2] != 0) ? `.${v[1]}${v[2]}` : `.${v[1]}` : ""}B`
	}
	else if (v.length > 6) {
		return `${v.slice(0, v.length - 6)}${v.length - 6 < 2 ? v[1] == 0 || (v[1] < 5 && v[2] != 0) ? `.${v[1]}${v[2]}` : `.${v[1]}` : ""}M`
	}
	else if (v.length > 3) {
		return `${v.slice(0, v.length - 3)}${v.length - 3 < 2 ? v[1] == 0 || (v[1] < 5 && v[2] != 0) ? `.${v[1]}${v[2]}` : `.${v[1]}` : ""}K`
	}

	return res
}

const convertDate = (d) => {
	let res;

	let now = new Date()

	let v = new Date(d)

	res = Math.floor(now.getTime() / 1000) - Math.floor(v.getTime() / 1000)

	let con

	if (Math.floor(res / 60 / 60 / 24 / 30 / 12) > 0) {
		con = Math.floor(res / 60 / 60 / 24 / 30 / 12)
		let months = con > 1 ? "years" : "year"
		res = `${con} ${months} ago`
	}

	else if (Math.floor(res / 60 / 60 / 24 / 30) > 0) {
		con = Math.floor(res / 60 / 60 / 24 / 30)
		let months = con > 1 ? "months" : "month"
		res = `${con} ${months} ago`
	}

	else if (Math.floor(res / 60 / 60 / 24 / 7) > 0) {
		con = Math.floor(res / 60 / 60 / 24 / 7)
		let weeks = con > 1 ? "weeks" : "week"
		res = `${con} ${weeks} ago`
	}

	else if (Math.floor(res / 60 / 60 / 24) > 0) {
		con = Math.floor(res / 60 / 60 / 24)
		let days = con > 1 ? "days" : "day"
		res = `${con} ${days} ago`
	}

	else if (Math.floor(res / 60 / 60) > 0) {
		con = Math.floor(res / 60 / 60)
		let hours = con > 1 ? "hours" : "hour"
		res = `${con} ${hours} ago`
	}

	else if (Math.floor(res / 60) > 0) {
		con = Math.floor(res / 60)
		let minutes = con > 1 ? "minutes" : "hour"
		res = `${con} ${minutes} ago`
	}

	return res

}
const convertDateToString = (d) => {

	const givenDate = new Date(d)

	const temp = givenDate.toDateString()

	return temp.slice("3")
}

const convertDuration = (d) => {

	let aD = d.slice(2, d.length)

	let h, m, s, temp
	
	if(aD.includes("S"))
		aD = aD.slice(0, aD.length - 1)

	if (aD.includes("M")) {
		temp = aD.split("M")
		
		if (temp[0].includes("H")) {
			const tempH = temp[0].split("H")
			h = tempH[0]
			m = tempH[1]
			s = temp[1]
		}
		else {
			m = temp[0]
			s = temp[1]
		}
	}
	else {
		s = aD
	}

	const res = `${`${h ? `${h}:` : ""}${m ? `${m}:` : "0:"}${s ? `${s.length < 2 ? `0${s}` : s}` : "00"}`}`

	return res
}

function formatDescription(text) {
	if (!text) return "";

  // Convert URLs into clickable links
  let formatted = text.replace(
    /(https?:\/\/[^\s]+)/g,
    (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: var(--primary);">${url}</a>`
  );

  // Convert timestamps (e.g., 0:30 or 1:23:45) into clickable spans
  formatted = formatted.replace(
    /\b(\d{1,2}:\d{2}(?::\d{2})?)\b/g,
    (match) => `<span class="timestamp" style="color: var(--primary); cursor: pointer;">${match}</span>`
  );

  // Optional: Convert **bold text** (e.g., **hello**) to <strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  return formatted.replace(/\n/g, '<br/>');
}

export {
	convertDate,
	convertDateToString,
	convertViews,
	convertDuration,
	formatDescription
}