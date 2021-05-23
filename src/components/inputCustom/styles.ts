import styled from "styled-components";

interface PropsInput {
  borderColorInput?: string;
}

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.input<PropsInput>`
  border: 1px solid
    ${({ theme, borderColorInput }) =>
      borderColorInput ? borderColorInput : theme.blue};
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 42px;
  margin-right: 16px;
  padding: 0;
  padding-left: 16px;

  font-size: 13px;
  font-family: "Muli";
  color: ${({ theme }) => theme.variantGray[200]};

  ::-webkit-input-placeholder {
    /* Edge */
    color: ${({ theme }) => theme.variantGray[200]};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.variantGray[200]};
  }

  ::placeholder {
    color: ${({ theme }) => theme.variantGray[200]};
  }

  @media (min-width: 517px) {
    height: 52px;
    font-size: 16px;
  }

  @media (min-width: 992px) {
    width: 343px;
  }
`;
