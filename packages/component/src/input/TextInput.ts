export class TextInputComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        const template = document.createElement("template");
        shadowRoot.appendChild(template.content.cloneNode(true));
        template.innerHTML = `
            <div class="control">
                <input type="text" />
            </div> 
            <div class="message"></div>   
        `;
    }
}

customElements.define("in-textinput", TextInputComponent);

