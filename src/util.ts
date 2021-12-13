export function loadImage(url) {
    let imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.style.display = 'none';
    document.body.appendChild(imgElement);
    return new Promise<HTMLImageElement>((resolve, reject) => imgElement.onload = () => { resolve(imgElement); });
}

export function h(tag: string, attributes?: object, children?: (HTMLElement|string)[]): HTMLElement {
    const result = document.createElement(tag);
    if (attributes)
        for (const [key, value] of Object.entries(attributes))
            result.setAttribute(key, value);
    if (children)
        for (const child of children)
            if (typeof(child) == 'string')
                result.appendChild(document.createTextNode(child));
            else
                result.appendChild(child);
    return result;
}