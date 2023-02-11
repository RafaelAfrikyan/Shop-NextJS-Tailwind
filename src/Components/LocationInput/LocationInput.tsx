import Autocomplete from "react-google-autocomplete";

const LocationInput = () => {
  return (
    <Autocomplete
      apiKey={"AIzaSyBjsINSH5x39Ks6c0_CoS1yr1Mb3cB3cVo"}
      onPlaceSelected={(place) => {
        console.log(place);
      }}
    />
  );
};
export default LocationInput;
