import styled from "styled-components";

const MainPageCard = ({part, inputRef}) => {

  const handleChange = (e) => {
    inputRef.current = e.target.value;
    console.log(inputRef, inputRef.current);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {handleChange(3)}}
        placeholder={part.toUpperCase()} />
    </div>
  )
}

export default MainPageCard;