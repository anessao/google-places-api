$(document).ready(() => {
	const apiKey = "";

	$("body").on("click", li, (e) => {
		loadPlaces(e.target.innerHTML).then((data) => {
			console.log(data);
		}).catch((error) => {
			console.log(error);
		});
	});

	const loadAPIRequest = (dropdownType) => {
		return new Promise ((resolve, reject) => {
			$.ajax(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.174465,-86.767960&rankby=radius=50000&type=${dropdownType}&key=${apiKey}`).done((data) => resolve(data))
				.fail((error) => reject(error));
		});
	};















});
