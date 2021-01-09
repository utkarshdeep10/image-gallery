/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_ACCESSKEY: string;
    }
}
declare module "react-grid-gallery" {
    function Gallery(images: any): JSX.Element;
    export = Gallery;
}
