import React from 'react';
import {Button} from '../ButtonElement';
import {InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img} from './InfoElements';

const Info = ({lightBg, id, imgStart, topLine, headLine, lightText,
darkText, description, buttonLabel, img, alt, primary, dark}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                                <Button to='home' smooth={true} duration={500} spy={true} exact='true' offset={-10} primary={primary ?1 : 0} dark={dark ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default Info
