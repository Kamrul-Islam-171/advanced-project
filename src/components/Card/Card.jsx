import { Link } from "react-router-dom";


const Card = ({blog}) => {
    const {cover_image, id, title, published_timestamp, description} = blog;
    return (
        <Link to='/' className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900
        hover:scale-105 transition border-2 border-primary hover:border-secondary rounded-lg border-opacity-30
        ">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-400">{new Date(published_timestamp).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default Card;