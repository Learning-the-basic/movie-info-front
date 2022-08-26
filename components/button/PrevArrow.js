function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className}
        onClick={onClick}>
        <div className="backButton">
          <img src="/images/back_button(g).png" alt="next" className="backButtonG" />
          <img src="/images/back_button(b).png" alt="next" className="backButtonB" />
        </div>
      </div>
    );
  }
  
  export default SamplePrevArrow;