function customRender(reactELe, mainContent){
    /* const domEle = document.createElement(reactELe.type)
    domEle.innerHTML = reactELe.children

    domEle.setAttribute('href', reactELe.props.href)
    domEle.setAttribute('target', reactELe.props.target)

    mainContent.appendChild(domEle)
    */
   
    const domEle = document.createElement(reactELe.type)
    domEle.innerHTML = reactEle.children

    for (const prop in reactELe.props) {
        if (prop == "children") continue //this was used when children was used to be in props
        domEle.setAttribute(prop, reactELe.props[prop])
    }
    mainContent.appendChild(domEle)

}

const reactEle = {

    type: 'a',
    props: {
        href: "https://react.dev",
        target: "_blank",    
    },
    children: "i'll move you to REACT WEBSITE"

}

const mainContent = document.querySelector('#root');

customRender(reactEle, mainContent);