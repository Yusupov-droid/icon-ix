import "./assets/style.scss";
import ICON_SET from './collection'

class IconIx {

	static option = {
		tittle: "IconIx",
		output: "#output",
		preview: "#preview",

		style: {
			icon: {
				size: "45px",
				margin: "5px",
				padding: "5px",
				fontSize: "30px",
			},
			color: {
				first: "#5a00aa",
				second: "#d2d2d2",
				third: "#616161",
				fourth: "#ffffff",
			},
		},
	};
	static paginator = {
		page: 1,
		page_size: 50,
		page_count: 20,
	};

	static #create(instance){
		let div = document.createElement("div");
		div.innerHTML = `<div class="picker__wrapper" picker-role="close">
							<div class="picker" picker-role="picker">
								<div class="picker__header">
									<h4 picker-role="tittle">${instance.#option.tittle}</h4>
									<span picker-role="close">
									<i class="fas fa-times"></i>
									</span>
								</div>
								<div class="picker__content">
									<div class="picker__content-search">
									<input placeholder="Search" type="text" picker-role="search">
									</div>
									<div class="picker__content-icons">
									<main picker-role="container">
									</main>
									</div>
									<div class="picker__content-paginator">
									<input type="button" picker-role="prev" value="prev"/>
									<span                picker-role="info"></span>
									<input type="button" picker-role="next" value="next"/>
									</div>
								</div>
							</div>
						</div>`;

		return div.firstElementChild;
	}

	constructor(selector, option, paginator) {

		this.#option = { ...IconIx.option, ...option };
		this.#paginator = { ...IconIx.paginator, ...paginator };

		this.#pickerElement = this.#getElement(selector);
		this.#outputElement = this.#getElement(this.#option.output);
		this.#previewElement = this.#getElement(this.#option.preview);

		this.#pickerElement.addEventListener("click", this.#init);
	}

	#icons = [];
	#option = {};
	#paginator = {};


	#pickerElement = null;
	#outputElement = null;
	#previewElement = null;


	#init = () => {

		this.#icons = this.#getIconSet();

		this.modalRootElement = IconIx.#create(this);
		this.modalCloseElemenet = this.#getRole("close");
		this.modalSearchElemenet = this.#getRole("search");
		this.modalPaginateNextElement = this.#getRole("next");
		this.modalPaginatePrevElement = this.#getRole("prev");
		this.modalPaginateInfoElement = this.#getRole("info");
		this.modalIconContainerElement = this.#getRole("container");


		this.#sync();
		this.#start();

	};
	#sync = () => {
		let root = document.documentElement;

		root.style.setProperty("--pc-icon-size", this.#option.style.icon.size);
		root.style.setProperty("--pc-icon-margin", this.#option.style.icon.margin);
		root.style.setProperty("--pc-icon-padding", this.#option.style.icon.padding);
		root.style.setProperty("--pc-icon-font-size", this.#option.style.icon.fontSize);

		root.style.setProperty("--pc-first-color", this.#option.style.color.first);
		root.style.setProperty("--pc-third-color", this.#option.style.color.third);
		root.style.setProperty("--pc-second-color", this.#option.style.color.second);
		root.style.setProperty("--pc-fourth-color", this.#option.style.color.fourth);
	};
	#start = () => {
		this.#pushIcons();

		this.modalRootElement.addEventListener("click", this.#onClose);
		this.modalCloseElemenet.addEventListener("click", this.#onClose);
		this.modalSearchElemenet.addEventListener("input", this.#onSearch);
		this.modalIconContainerElement.addEventListener("click", this.#onIcon);
		this.modalPaginateNextElement.addEventListener("click", this.#onPaginate);
		this.modalPaginatePrevElement.addEventListener("click", this.#onPaginate);

		document.body.appendChild(this.modalRootElement);
		setTimeout(() => this.modalRootElement.classList.add("open"));
	};
	#destroy = () => {
		this.#icons = null;

		this.modalRootElement.removeEventListener("click", this.#onClose);
		this.modalCloseElemenet.removeEventListener("click", this.#onClose);
		this.modalSearchElemenet.removeEventListener("input", this.#onSearch);
		this.modalIconContainerElement.removeEventListener("click", this.#onIcon);
		this.modalPaginateNextElement.removeEventListener("click", this.#onPaginate);
		this.modalPaginatePrevElement.removeEventListener("click", this.#onPaginate);

		this.modalRootElement.classList.remove("open");

		setTimeout(() => this.modalRootElement.parentNode.removeChild(this.modalRootElement),100);
	};

	#onIcon = (event) => {
		let role = event.target.getAttribute("picker-role");
		if (role === "icon") {
			let data = event.target.getAttribute("data-icon");

			this.#outputElement.value = data;
			this.#previewElement.innerHTML = `<i class="${data}"></i>`;

			this.#destroy();
		}
	};
	#onClose = (event) => {
		let role = event.target.getAttribute("picker-role");
		if (role === "close") {
			this.#destroy();
		}
	};
	#onSearch = (event) => {
		this.#searchIcons(event.target.value);
		this.#pushIcons();
	};
	#onPaginate = (event) => {
		let role = event.target.getAttribute("picker-role");
		switch (role) {
			case "next":
				if (this.#paginator.page + 1 > this.#paginator.page_count) return;
				this.#paginator.page++;

				break;
			case "prev":
				if (this.#paginator.page - 1 < 1) return;
				this.#paginator.page--;
				break;
		}
		this.#pushIcons();
	};

	#getRole = (rolename) => {
		return this.modalRootElement.querySelector(`[picker-role="${rolename}"]`);
	};
	#getElement = (selector) => {
		return selector instanceof HTMLElement
			? selector
			: document?.querySelector(selector);
	};
	#getIconSet = () => {
		return ICON_SET
	}

	#pushIcons = () => {
		this.#paginator.page_count = Math.ceil(
			this.#icons.length / this.#paginator.page_size
		);
		this.modalPaginateInfoElement.innerHTML =
			this.#paginator.page + "/" + this.#paginator.page_count;

		let result = this.#icons.slice(
			(this.#paginator.page - 1) * this.#paginator.page_size,
			this.#paginator.page * this.#paginator.page_size
		);

		this.modalIconContainerElement.innerHTML = result
			.map(
				(e) =>
					`<a picker-role='icon' data-icon="${e.value}"><i class='${e.value}'></i></a>`
			)
			.join("");
	};
	#searchIcons = (search) => {
		if (!search) {
			this.#icons = this.#getIconSet();
		} else {
			this.#icons = this.#getIconSet().filter((elem) => {
				return elem.search.find((e) => {
					return e.includes(search);
				})
					? elem
					: null;
			});
			this.#paginator.page = 1;
		}
	};

}

export default IconIx;
