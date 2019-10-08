export const setHome = () => {
	console.log("hello");
	return {
		type: "HOME"
	};
};

export const setGallery = () => {
	return {
		type: "GALLERY"
	};
};

export const setAbout = () => {
	return {
		type: "ABOUT"
	}
}

export const setContact = () => {
	return {
		type: "CONTACT"
	}
}