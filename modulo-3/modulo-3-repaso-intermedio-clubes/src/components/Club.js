import PropTypes from "prop-types";
import ClubList from "./ClubList";

function Club(props) {
  console.log(props);
  return (
    <>
      <div className="text-container">
        <h2>{props.club.name}</h2>
        <p>{props.club.members}</p>
      </div>
    </>
  );
}

Club: PropTypes.shape({
  name: PropTypes.string.isRequired,
});

export default Club;

//<i {props.club.fa}></i>
