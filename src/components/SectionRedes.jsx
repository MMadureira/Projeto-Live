export default function Section(props) {
    return (
        <section className="sectionRedes">
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <ul className="redes">{props.children}</ul>
            </div>
        </section>
    );
};