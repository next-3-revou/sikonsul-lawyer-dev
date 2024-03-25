/* eslint-disable react/prop-types */

const Buttons = ({ title, onClick, width, height, gap, tipe }) => {
  if(tipe === 'active') {
    return (
      <button type='submit' className={`${width} ${height} ${gap} bg-btn-active`} onClick={onClick}>{title}</button>
    )
  } else if(tipe === 'inactive') {
    return (
      <button type='submit' className={`${width} ${height} ${gap} bg-btn-inactive`} onClick={onClick}>{title}</button>
    )
  } else {
    return (
      <button type='submit' className={`${width} ${height} ${gap}`} onClick={onClick}>{title}</button>
    )
  }

}

export default Buttons