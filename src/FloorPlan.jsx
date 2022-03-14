import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return ( 
    <>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bathroom size ="Full"/>
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bathroom size ="Half"/>
      <Bedroom bedNum={3} />
    </>
  );
}

export default FloorPlan;