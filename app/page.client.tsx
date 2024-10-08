"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
`;

export const RefreshButton = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #333;
  }
`;
