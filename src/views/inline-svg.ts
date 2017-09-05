import { HttpClient } from "aurelia-fetch-client";
import { bindable, containerless, customElement, inject, inlineView } from "aurelia-framework";

@containerless()
@inlineView("<template></template>")
@customElement("inline-svg")
@inject(Element, HttpClient)
export class InlineSvg {
	@bindable public svg;

	private el: HTMLElement;
	private http: HttpClient;

	constructor(el: HTMLElement, http: HttpClient) {
		this.el = el;
		this.http = new HttpClient();
	}

	public bind() {
		this.svgChanged(this.svg);
	}

	public svgChanged(svg) {
		if (svg) {
			this.http.fetch(`${svg}`)
				.then(response => response.text())
				.then(response => this.el.parentElement.innerHTML = response);
		}
	}

}