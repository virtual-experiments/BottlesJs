import { TypeOfTag } from "typescript";

export function loadImage(url) {
    let imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.style.display = 'none';
    document.body.appendChild(imgElement);
    return new Promise<HTMLImageElement>((resolve, reject) => imgElement.onload = () => { resolve(imgElement); });
}

export function h<T extends keyof HTMLElementTagNameMap>(tag: T, children: (HTMLElement|string)[]): HTMLElementTagNameMap[T];
export function h<T extends keyof HTMLElementTagNameMap>(tag: T, attributes: object, children?: (HTMLElement|string)[]): HTMLElementTagNameMap[T];
//export function h(tag: string, children: (HTMLElement|string)[]): HTMLElement;
//export function h(tag: string, attributes: object, children?: (HTMLElement|string)[]): HTMLElement;

export function h(tag: string, arg1?: any, arg2?: any): HTMLElement {
    const result = document.createElement(tag);
    let attributes;
    let children;
    if (! arg2 && arg1 && arg1 instanceof Array) {
        children = arg1;
    } else {
        attributes = arg1;
        children = arg2;
    }
    if (attributes)
        for (const [key, value] of Object.entries(attributes))
            result.setAttribute(key, value as string);
    if (children)
        for (const child of children)
            if (typeof(child) == 'string')
                result.appendChild(document.createTextNode(child));
            else
                result.appendChild(child);
    return result as any;
}