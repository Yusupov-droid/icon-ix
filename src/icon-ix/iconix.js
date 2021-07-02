import "./assets/style.scss";

class IconSet {

	static ICONS = [];

	static search(value, icons_set) {
		return icons_set.filter((item) => {
			return item.search.find((elem) => {
				return elem.includes(value);
			})
				? item
				: null;
		});
	};

	static paginate(page, page_size, icons_set) {
		let result = icons_set.slice((page - 1) * page_size, page * page_size);

		return {
			data: result,
			page_count: Math.ceil(icons_set.length / page_size)
		}
	};

	static get_icon_set(){
		if (this.ICONS.length > 0) {
			return this.ICONS
		}
		else if (typeof window.ICON_SET === 'object') {
			return window.ICON_SET
		}
		else {
			throw new Error('ICON_SET is not defined or not connected.')
		}
	}
}
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

	static #add_handlers(instance) {
		instance.modalRootElement.addEventListener("click", instance.#onClose);
		instance.modalCloseElemenet.addEventListener("click", instance.#onClose);
		instance.modalSearchElemenet.addEventListener("input", instance.#onSearch);
		instance.modalIconContainerElement.addEventListener("click", instance.#onIcon);
		instance.modalPaginateNextElement.addEventListener("click", instance.#onPaginate);
		instance.modalPaginatePrevElement.addEventListener("click", instance.#onPaginate);
	}
	static #del_handlers(instance) {
		instance.modalRootElement.removeEventListener("click", instance.#onClose);
		instance.modalCloseElemenet.removeEventListener("click", instance.#onClose);
		instance.modalSearchElemenet.removeEventListener("input", instance.#onSearch);
		instance.modalIconContainerElement.removeEventListener("click", instance.#onIcon);
		instance.modalPaginateNextElement.removeEventListener("click", instance.#onPaginate);
		instance.modalPaginatePrevElement.removeEventListener("click", instance.#onPaginate);
	}
	static #get_role(role , root) {
		return root.querySelector(`[picker-role="${role}"]`);
	}
	static #get_element(selector) {
		return selector instanceof HTMLElement ? selector : document?.querySelector(selector);
	}
	constructor(selector, option, paginator) {

		this.#option = { ...IconIx.option, ...option };
		this.#paginator = { ...IconIx.paginator, ...paginator };

		this.#pickerElement = IconIx.#get_element(selector);
		this.#outputElement = IconIx.#get_element(this.#option.output);
		this.#previewElement = IconIx.#get_element(this.#option.preview);

		this.#pickerElement.addEventListener("click", this.#init);
	}

	#icons = [];
	#option = {};
	#paginator = {};


	#pickerElement = null;
	#outputElement = null;
	#previewElement = null;


	#init = () => {

		this.#icons = IconSet.get_icon_set();

		this.modalRootElement = IconIx.#create(this);
		this.modalCloseElemenet = IconIx.#get_role("close", this.modalRootElement);
		this.modalSearchElemenet = IconIx.#get_role("search", this.modalRootElement);
		this.modalPaginateNextElement = IconIx.#get_role("next", this.modalRootElement);
		this.modalPaginatePrevElement = IconIx.#get_role("prev", this.modalRootElement);
		this.modalPaginateInfoElement = IconIx.#get_role("info", this.modalRootElement);
		this.modalIconContainerElement = IconIx.#get_role("container", this.modalRootElement);


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

		IconIx.#add_handlers(this);

		document.body.appendChild(this.modalRootElement);
		setTimeout(() => this.modalRootElement.classList.add("open"));
	};
	#destroy = () => {
		this.#icons = null;

		IconIx.#del_handlers(this);

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
			this.#icons = IconSet.get_icon_set();
		} else {
			this.#icons = IconSet.get_icon_set().filter((elem) => {
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
