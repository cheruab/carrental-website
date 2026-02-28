import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Img1 from "../../../assets/images/appstore.svg";
import Img2 from "../../../assets/images/googleapp.svg";

const DownloadSection = styled.section`
  background-image: url("/assets/images/bg02.png");
  background-color: #f3f4f6; // Assuming $bg-gray is a light gray color
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 10rem 0;

  @media (max-width: 700px) {
    background-image: none;
  }
`;

const DownloadText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 55rem;
  text-align: center;
 


  @media (max-width: 700px) {
    text-align: center;
    margin: 0 auto;
  }

  h2 {
    ${tw`text-4xl text-black font-bold`}; // Replace with your actual font size and color
  }

  p {
    ${tw`text-4xl text-base text-gray-600 font-normal`}; // Replace with your actual font size and color
    font-family: "Your Font"; // Replace with your actual font family
    line-height: 1.5;
  }

  &__btns {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
   
    @media (max-width: 700px) {
      justify-content: center;
    }

    @media (max-width: 550px) {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 40%;
      cursor: pointer;

      @media (max-width: 550px) {
        width: 22rem;
      }
    }
  }
`;

export function Download() {
  return (
    <DownloadSection>
      <div className="container">
        <DownloadText>
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.
          </p>
          <div className="download-text__btns">
            <img alt="download_img" src={Img2} />
            <img alt="download_img" src={Img1} />
          </div>
        </DownloadText>
      </div>
    </DownloadSection>
  );
}

