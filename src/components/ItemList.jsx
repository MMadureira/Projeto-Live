export default function ItemList({ url, imgUrl, alt }) {
    return (
        <li>
            <a
                target="_blank"
                href={url}>
                <img src={imgUrl}
                    alt={alt}
                />
            </a>
        </li>
    );
};