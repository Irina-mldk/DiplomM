import styled from 'styled-components'


const Sorting = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  > img {
    margin-right: 20px;
  }
`

const SortingTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    margin-right: 6px;
  }
`

const HighLighted = styled.span`
  color: ${props => props.theme.colors.primary};
  margin-left: 4px;
`

const SortingContainer = styled.div`
  position: absolute;
  display: ${props => props.isOpen ? 'block' : 'none'};
  width: 210px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 40px 0 rgb(0 0 0 / 12%);
  padding: 20px;
  top: 32px;
  right: 0;
  z-index: 3;
`

const SortingItem = styled.div`
  padding: 16px 10px;
  transition: background-color 0.2s;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;

  :hover {
    background-color: #d0d0d0;
  }

  :active {
    background-color: #939393;
  }

  img {
    max-width: 12px;
    margin-right: 8px;
  }
`

export {
  Sorting,
  SortingTitle,
  HighLighted,
  SortingContainer,
  SortingItem
}
