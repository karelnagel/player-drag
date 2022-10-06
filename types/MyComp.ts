export type Props = {
    elements: Element[];
}
export type Element = (
    { type: "text", props: TextProps } |
    { type: "image", props: ImageProps })
    & {
        id: string
        width: number;
        height: number;
        x: number;
        y: number;
    }
export type TextProps = {
    text: string;
    fontSize: number;
    color: string;
    backgroundColor: string;
}
export type ImageProps = {
    src: string;
    borderRadius: number;
    objectFit: "cover" | "contain";
}
export const defaultProps: Props = {
    elements: [
        {
            id: "text1",
            type: "text",
            props: {
                text: "Hello World",
                fontSize: 100,
                color: "#000",
                backgroundColor: "#f0f"
            },
            width: 550,
            height: 150,
            x: 300,
            y: 200
        },
        {
            id: "image1",
            type: "image",
            props: {
                src: "https://picsum.photos/seed/asdf/200",
                borderRadius: 0,
                objectFit: "cover"
            },
            width: 500,
            height: 500,
            x: 500,
            y: 700
        }
    ]
}