function returnFirstTwoDrivers(arr) {
	return [arr[0], arr[1]];
}

function returnLastTwoDrivers(arr) {
	return [arr[arr.length - 2], arr[arr.length - 1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function  createFareMultiplier(x) {
	return function() {
		return 5 * x;
	}
}

function fareDoubler(fn) {
	return fn * 2;
}

function fareTripler(fn) {
	return fn * 3;
}

function selectDifferentDrivers(arr, fn){
	return fn(arr);
}