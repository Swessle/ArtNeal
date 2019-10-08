import history from "../history";

export const setHome = () => {
	history.push("/");
	return {
		type: "HOME"
	};
};
export const setAbout = () => {
	history.push("/about");
	return {
		type: "ABOUT"
	};
};

export const setGallery = () => {
	history.push("/gallery");
	return {
		type: "GALLERY"
	};
};

export const setContact = () => {
	history.push("/contact");
	return {
		type: "CONTACT"
	};
};
