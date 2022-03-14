const Bathroom = (props) => {
  return ( 
    <div className='bethroom' id={`bath-${props.size}`}>
      {props.size} Bath
    </div>
  );
}
export default Bathroom;