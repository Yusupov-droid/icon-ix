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

	static get ICONS() {
		return IconSet.ICONS;
	}
	static set ICONS(value) {
		IconSet.ICONS = value;
	}
	static OPTIONS = {
		title:"IconIx",
		picker:null,
		output:null,
		preview:null,
		page_size:50,
		searchPlaceholder:"Search icon",
		paginatorNextButton:"next",
		paginatorPrevButton:"prev",
		header:true,
		paginate:true,
		searchable:true,
		hideOnSelect:true,
		iconSize:'45px',
		iconMargin:'5px',
		iconPadding:'5px',
		iconFontSize:'30px',
	}
	static #create(instance){
		let div = document.createElement("div");
		div.innerHTML = `<div class="picker__wrapper" picker-role="close">
							<div class="picker" picker-role="picker">
								<div class="picker__header" ${instance.#option.header ? '' : "style='display:none'"}>
									<h4 picker-role="tittle">${instance.#option.title}</h4>
									<span picker-role="close">
									<i class="fas fa-times"></i>
									</span>
								</div>
								<div class="picker__content">
									<div class="picker__content-search" ${instance.#option.searchable ? '' : "style='display:none'"}>
									<input placeholder="${instance.#option.searchPlaceholder}" type="text" picker-role="search">
									</div>
									<div class="picker__content-icons">
									<main picker-role="container">
									</main>
									</div>
									<div class="picker__content-paginator" ${instance.#option.paginate ? '' : "style='display:none'"}>
									<input type="button" picker-role="prev" value="${instance.#option.paginatorPrevButton}"/>
									<span                picker-role="info"></span>
									<input type="button" picker-role="next" value="${instance.#option.paginatorNextButton}"/>
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

	constructor(option) {
		
		this.#option 	= { ...IconIx.OPTIONS , ...option };

		this.#paginator = {
			page		:1,
			paginate	:this.#option.paginate,
			page_size	:this.#option.page_size,
		}


		IconIx.#get_element(this.#option.picker).addEventListener("click", this.#init);
	}

	#icons 		= [];
	#option		= {};
	#paginator 	= {};




	#init = () => {

		this.#icons = IconSet.get_icon_set();

		this.modalRootElement 			= IconIx.#create(this);

		this.modalCloseElemenet 		= IconIx.#get_role("close", 	this.modalRootElement	);
		this.modalSearchElemenet 		= IconIx.#get_role("search", 	this.modalRootElement	);
		this.modalPaginateNextElement 	= IconIx.#get_role("next", 		this.modalRootElement	);
		this.modalPaginatePrevElement 	= IconIx.#get_role("prev", 		this.modalRootElement	);
		this.modalPaginateInfoElement 	= IconIx.#get_role("info", 		this.modalRootElement	);
		this.modalIconContainerElement 	= IconIx.#get_role("container", this.modalRootElement	);


		this.#sync();
		this.#start();

	};
	#sync = () => {

		let root = document.documentElement;

		root.style.setProperty("--pc-icon-size", 		this.#option.iconSize		);
		root.style.setProperty("--pc-icon-margin", 		this.#option.iconMargin		);
		root.style.setProperty("--pc-icon-padding", 	this.#option.iconPadding	);
		root.style.setProperty("--pc-icon-font-size", 	this.#option.iconFontSize	);

		
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

			IconIx.#get_element(this.#option.output).value = data;
			IconIx.#get_element(this.#option.preview).innerHTML = `<i class="${data}"></i>`;

			if(this.#option.hideOnSelect){
				this.#destroy();
			}
		}
	};
	#onClose = (event) => {
		let role = event.target.getAttribute("picker-role");
		if (role === "close") {
			this.#destroy();
		}
	};
	#onSearch = (event) => {
		if (event.target.value === '') {
			this.#icons = IconSet.get_icon_set()
		}
		else {
			this.#icons = IconSet.search(event.target.value, IconSet.get_icon_set());
		}
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


	#pushIcons = () => {

		if(this.#option.paginate){
			let result = IconSet.paginate(this.#paginator.page, this.#paginator.page_size, this.#icons)
			this.#paginator.page_count = result.page_count;
			this.modalPaginateInfoElement.innerHTML = this.#paginator.page + "/" + result.page_count;
	
			this.modalIconContainerElement.innerHTML = result.data
				.map(
					(e) =>
						`<a picker-role='icon' data-icon="${e.value}"><i class='${e.value}'></i></a>`
				)
				.join("");
		}
		else{
			this.modalIconContainerElement.innerHTML = this.#icons
				.map(
					(e) =>
						`<a picker-role='icon' data-icon="${e.value}"><i class='${e.value}'></i></a>`
				)
				.join("");
		}
	};


}

export default IconIx;
