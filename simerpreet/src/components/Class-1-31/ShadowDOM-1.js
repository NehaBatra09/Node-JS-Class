import React from "react";
// Element which has no effect of outer dom style classes are the shadow dom, like date-picker

export const ShadowDOMEx = () => {

    return (<>
        <input type="range" className="error" />
        {/* <cust-tag></cust-tag> */}
    </>)

}
customElements.define('cust-tag',

    class extends HTMLElement {
        connectedCallback() {
            const temp = this.attachShadow({ mode: 'open' })
            temp.innerHTML = "<p>Custom Shadow Element</p>"
        }
    }
)