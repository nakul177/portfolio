import "./product.css";

const Product = ({img,link,name ,git}) => {
  return (
    <>
    <div className="p">
      <div className="p-browser">
        <div className="p-circle">{name}</div>
        <div className="p-icon"><a href={git}><i class="fa fa-github fa-1x"></i></a></div>
        <div className="p-icon2"><a href={link}><i class="fa fa-globe"></i></a></div>  
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div> 
    </>

    
  );
};

export default Product;
