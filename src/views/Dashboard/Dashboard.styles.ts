import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;
export const UserDetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  p {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const EditLink = styled(Link)`
  text-align: center;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
`;

export const NoDataText = styled.p`
  color: #e74c3c;
  font-size: 1.2rem;
  margin: 0;
`;

export const AddDetailsLink = styled(Link)`
  color: #2ecc71;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
`;

export const BMIIndicatorWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
