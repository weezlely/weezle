declare const wrapper: {
    readonly flexDirection: "column";
    readonly position: "fixed";
    readonly zIndex: 10;
    readonly top: "20vh";
    readonly left: 0;
    readonly right: 0;
    readonly borderTopLeftRadius: "8px";
    readonly borderTopRightRadius: "8px";
    readonly backgroundColor: "white";
    readonly boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)";
    readonly height: `${number}px`;
    readonly margin: "0 auto";
    readonly overflow: "auto";
};
declare const header: {
    readonly width: "32px";
    readonly height: "4px";
    readonly borderRadius: "8px";
    readonly backgroundColor: "#d0d0d0";
    readonly margin: "auto";
    readonly marginTop: "20px";
};
declare const contents: {
    readonly height: "80vh";
    readonly padding: "2rem";
    readonly zIndex: 99;
};
export { wrapper, header, contents };
