export default function ItemListRedes(props) {
    return (
        <li>
            <a
                target="_blank"
                href={props.url}>
                <img src={props.imgUrl} 
                alt={props.alt} 
            />
            </a>
        </li>
    );
};