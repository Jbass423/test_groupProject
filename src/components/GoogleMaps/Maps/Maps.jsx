import { Wrapper } from "@googlemaps/react-wrapper";
import MyMapComponent from "./MapCompon";

const MyApp = () => {
    return(
        <>
        
  <Wrapper apiKey={'AIzaSyAm6yKhKSP38jztFaKtIdCgbsos6r3jmnM'}>
    <MyMapComponent />
  </Wrapper>
  
  </>
);
}
export default MyApp