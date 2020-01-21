const isEven = n => n % 2 == 0

function checkDigit(upc) {
	if (upc.length !== 11) {
		throw new Error("must enter 11 digits")
	}
	let even = 0,
		odd = 0
	for (let i = 0; i < 11; i++) {
		if (isEven(i)) {
			even += parseInt(upc[i])
		} else {
			odd += parseInt(upc[i])
		}
	}
	let sum = odd + even * 3
	let check = 0
	while ((check + sum) % 10 !== 0) {
		check++
	}
	return check
}

export function isValidUpc(upc) {
	if (upc.length != 12) {
		return false
	}
	let check = upc[upc.length - 1]
	return checkDigit(upc.slice(0, -1)) == check
}

export async function getItem(upc, token) {
	try {
		let response = await fetch(
			`http://192.168.1.7:8080/api/v1/inventory/${upc}`,
			{
				method: "get",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					authorization: token
				}
			}
		)
		let json = await response.json()

		return json
	} catch (error) {
		throw Error(error)
	}
}
