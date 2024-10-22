class Copier {
	static copy(text:string) {
		const textarea = document.createElement("textarea");
		textarea.value = text;

		textarea.style.position = "fixed";
		textarea.style.opacity = "0";

		document.body.appendChild(textarea);

		textarea.select();
		textarea.setSelectionRange(0, 99999); // For mobile devices

		document.execCommand("copy");

		document.body.removeChild(textarea);
	}
}

export default Copier