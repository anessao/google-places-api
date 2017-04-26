$(document).ready(() => {
	const apiKey = "";
	const writeToDOM = (info) => {
		$("#places").html("");
		for (let i = 0; i < info.length; i++){
			$("#places").append(`<a href="#"><div class="eachPlace" id="${info[i].place_id}">${info[i].name}</div></a>`);
		}
	}
	const writeAddressToDom = (info) => {
		let outputString = `<div>${info}</div>`;
		$("#addresses").append(outputString);
	}

	$("body").on("click", "li", (e) => {
		loadAPIRequest(e.target.innerHTML).then((results) => {
			writeToDOM(results);
		}).catch((error) => {
			console.log(error);
		});
	});
	$("#places").on("click", ".eachPlace", (e) => {
		let placeDetailId = e.target.id;
		loadDetails(placeDetailId).then((result) => {
			writeAddressToDom(result.formatted_address);
		});
	});

	const loadDetails = (placeId) => {
		return new Promise ((resolve, reject) => {
			$.ajax(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`)
			.done((data2) => {
				resolve(data2.result);
			}).fail((error2) => {
				console.log(error2);
			});
		});
	};

	const loadAPIRequest = (dropdownType) => {
		return new Promise ((resolve, reject) => {
			$.ajax(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.174465,-86.767960&radius=50000&type=${dropdownType}&key=${apiKey}`).done((data) => resolve(data.results))
				.fail((error) => reject(error));
		});
	};















});
