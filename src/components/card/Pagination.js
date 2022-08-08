function Pagination({ onClickRight, onClickLeft }) {
  return (
    <div className="paginationContainer">
      <button className="button" onClick={onClickLeft}>
        ◀️
      </button>
      <h2>1 from 2</h2>
      <button className="button" onClick={onClickRight}>
        ▶️
      </button>
    </div>
  );
}

export default Pagination;
