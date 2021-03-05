import styled from "styled-components";

export const ProfilerContainer = styled.div``;
export const ItemList = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li``;

export const ProfileImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 40px;
  @media (min-width: 376px) {
    width: 255px;
  }
`;

const Profiler = ({ data }) => {
  console.log(data);
  const { avatar_url, name } = data;
  console.log(avatar_url, name);
  return (
    <ProfilerContainer>
      <ItemList>
        <Item>
          <ProfileImage src={avatar_url} alt={name} />
        </Item>
        <Item>
          <h3 style={{ fontSize: "x-large", fontWeight: "bold" }}>{name}</h3>
        </Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </ItemList>
    </ProfilerContainer>
  );
};

export default Profiler;
