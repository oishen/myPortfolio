const Card = ({url, description, name, img}) => {
    return (
        <div id='card'>
            <div>
                <a href={url} target="_blank">
                    <img src={img} alt="" className='rounded-2 w-100' />
                </a>
            </div>
            <label className="text-warning">{name}</label>
            <p>{description}</p>
        </div>
    )
}

export default Card