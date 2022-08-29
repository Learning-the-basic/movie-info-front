function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className}
        onClick={onClick}>
        <div className="nextButton">
          <img src="/images/next_button(g).png" alt="next" className="nextButtonG" style={{marginLeft: "60px"}}/>
          <img src="/images/next_button(b).png" alt="next" className="nextButtonB" style={{marginLeft: "60px"}}/>
        </div>
      </div>

    );
  }

  export default SampleNextArrow;