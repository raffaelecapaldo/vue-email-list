const {
	createApp
} = Vue


const app = createApp({
	data() {
		return {
			titolo: "Contatti mail",
			basePath: "https://flynn.boolean.careers/exercises/api/",
			emails: [],
			numMail: 10
		}
	},
	methods: {
		getMail() {
			for (i = 0; i < this.numMail; i++) {
				axios.get(this.basePath + "random/mail").then((response) => {
						email = response.data.response;
						console.log(email);
						this.emails.push(email);
					}

				)

			}
		}

	},
	mounted() {
		this.getMail();
	}
})

app.mount('#app')