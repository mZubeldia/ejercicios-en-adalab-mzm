import Club from "./Club";

function ClubList(props) {
  const htmlData = props.data.map((club) => (
    <li key={club.id}>
      <Club club={club} />
    </li>
  ));

  return <ul className="clubCard">{htmlData}</ul>;
}

export default ClubList;
