import ItemList from "./ItemList";

export default function Section({ title, subtitle, className, children, list }) {
    return (
        <section>
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <ul className={className}>
                    {
                        list.map((item, key) => {
                            const { url, imgUrl, alt } = item
                            return (

                                <ItemList
                                    url={url}
                                    imgUrl={imgUrl}
                                    alt={alt}
                                    key={key}
                                />
                            )
                        })
                    }
                    {children}
                </ul>
            </div>
        </section>
    );
};