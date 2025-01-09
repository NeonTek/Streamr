const Card = ({text, data, color}) => {
    return ( 
        <article className="db_card" style={{backgroundColor: color}}>
            <h2 className="db_card-content">{text}: <span>{data}</span></h2>
        </article>
     );
}
 
export default Card;