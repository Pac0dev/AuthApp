export default function(file) {
	return new Promise((resolve, reject) => {

		const formData = new FormData();
		formData.append('file', file);
		formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET);

		const config = {
			method: 'POST',
			body: formData
		};

		fetch(import.meta.env.VITE_CLOUDINARY_BASE_URL, config )
			.then((res) => res.json())
			.then((data) => {
				if(data.secure_url !== undefined) {
					resolve(secure_url);
				} else {
					reject('no secure url');
				}
			})
			.catch((err) => {
				reject(err);
			})
	})
}
