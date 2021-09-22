import styled from 'styled-components'
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui'

export const Container = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  min-height: 100vh;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`

export const CustomWrapper = styled.div`
  width: 100%;
  max-width: 1780px;
  margin: 0 auto;
  padding: 0 15px;
  @media (max-width: 1500px) {
    padding: 0 30px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const Wrap = styled.div``

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(p) => p.flexDirection};
`
// ------------------------ Header -------------------------

export const HeaderWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
export const HeaderContent = styled.div`
  display: flex;
  padding-top: 1.25rem;
`
export const Logo = styled.a`
  z-index: 5;
  width: 207px;
  height: 205px;
  margin-right: 4rem;
  position: realtive;
  @media (max-width: 1200px) {
    margin-right: 50px;
  }
  @media (max-width: 992px) {
    width: 157px;
    height: 155px;
    margin-right: 0;
  }
  @media (max-width: 576px) {
    width: 80px;
    height: 87px;
  }
`
export const Nav = styled.nav`
  position: relative;
  width: 100%;
  z-index: 4;
  @media (max-width: 992px) {
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.3s linear;
    transition: 0.3s linear;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    background-color: #fff;
  }
`
export const Menu = styled.ul`
  padding-top: 2.25rem;
  flex-grow: 1;
  z-index: 4;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    overflow-y: auto;
    flex-direction: column;
    height: calc(100%);
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`
export const MenuItem = styled.li`
  list-style-type: none;
  @media (max-width: 992px) {
    &:not(:last-child) {
      margin-bottom: 70px;
    }
  }
`
export const MenuLabel = styled.a`
  font-size: 24px;
  color: #000000;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 992px) {
  }
`

// ------------------------ Content ------------------------
export const HomeWrap = styled.div``

export const Main = styled.main``

export const HomeHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 1080px;
  background: url(media/img/content/home/home-hero-bg.webp) no-repeat top;
  background-size: cover;
  position: relative;
  &:before {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#f9e235),
      color-stop(5%, #f9e235),
      color-stop(31%, rgba(181, 164, 38, 0.185032)),
      to(transparent)
    );
    background: linear-gradient(
      180deg,
      #f9e235 0%,
      #f9e235 5%,
      rgba(181, 164, 38, 0.185032) 31%,
      transparent 100%
    );
  }
  @media (max-width: 992px) {
    height: 850px;
    background: url(media/img/content/home/home-hero-bg-mobile.jpg) no-repeat
      top;
    background-size: cover;
  }
  @media (max-width: 576px) {
    height: 630px;
  }
`
export const HomeHeroContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 2;
  position: relative;
  @media (max-width: 1500px) {
    top: -50px;
  }
  @media (max-width: 576px) {
    padding-top: 50px;
    height: 630px;
  }
`
export const Title = styled.h1`
  max-width: 1700px;
  color: #fff;
  text-shadow: 0 0 8px rgb(0 0 0 / 43%);
  margin-bottom: 5rem;
  text-align: center;
  @media (max-width: 1530px) {
    font-size: 70px;
    line-height: 80px;
  }
  @media (max-width: 1200px) {
    font-size: 65px;
    margin-bottom: 50px;
  }
  @media (max-width: 992px) {
    font-size: 46px;
    line-height: 58px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: 576px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 20px;
  }
`
export const SubTitle = styled.p`
  max-width: 1600px;
  color: #fff;
  background: #9054e6;
  text-shadow: 0 0 8px rgb(0 0 0 / 43%);
  font-size: 38px;
  text-align: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 4rem;
  @media (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    max-width: 700px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 30px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 20px;
  }
`

export const BtnWallet = styled(WalletDialogButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 445px;
  height: 140px;
  background-color: transparent !important;
  color: rgba(0, 0, 0, 0.87) !important;
  background: url(media/img/svg/index-two-button.svg) no-repeat center;
  background-size: contain;
  position: relative;
  @media (max-width: 992px) {
    width: 300px;
    height: 100px;
  }
  @media (max-width: 576px) {
    width: 125px;
    height: 40px;
  }
`
export const Mint = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 445px;
  height: 140px;
  background-color: transparent !important;
  color: rgba(0, 0, 0, 0.87) !important;
  background: url(media/img/svg/index-two-button.svg) no-repeat center;
  background-size: contain;
  position: relative;
  @media (max-width: 992px) {
    width: 300px;
    height: 100px;
  }
  @media (max-width: 576px) {
    width: 125px;
    height: 40px;
  }
`
export const WalletLabel = styled.span`
  font-weight: 700;
  pointer-events: none;
  font-size: 34px;
  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const CounterText = styled.span``

export const HomeMembership = styled.div`
  padding-bottom: 20px;
  background-color: #f1572a;
  position: relative;
`
export const Cloud = styled.div`
  z-index: 1;
  top: -225px;
  width: 100%;
  height: 305px;
  background: url(media/img/svg/membership-clouds.svg) no-repeat center;
  background-size: cover;
  position: absolute;
  left: 0;
  @media (min-width: 1921px) {
    top: -275px;
    height: 350px;
  }
`
export const HomeMembershipContent = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 992px) {
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
  }
`
export const HomeMembershipIllu = styled.div`
  min-width: 525px;
  height: 516px;
  margin-right: 4rem;
  @media (max-width: 1200px) {
    min-width: 360px;
    height: 370px;
    margin-right: 60px;
  }
  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
  @media (max-width: 576px) {
    min-width: 270px;
    height: 280px;
  }
`
export const HomeMembershipText = styled.p`
  color: #fff;
  font-size: 26px;
  @media (max-width: 1200px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 33px;
  }
`
export const HomeMinting = styled.div`
  z-index: 6;
  top: 0;
  left: 0;
  visibility: hidden;
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
`
export const HomeMintingContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  position: realtive;
`
export const HomeMintingCard = styled.div`
  max-width: 1310px;
  max-height: 690px;
  margin: auto;
  background-color: #fff;
  -webkit-box-shadow: 3px 3px 43px 10px rgb(0 0 0 / 53%);
  box-shadow: 3px 3px 43px 10px rgb(0 0 0 / 53%);
  border-radius: 60px;
  padding: 2rem;
  @media (max-width: 1200px) {
    padding: 40px;
  }

  @media (max-width: 992px) {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 20px 20px 40px;
    border-radius: 40px;
  }
`

export const HomeRoyalty = styled.div`
  background-color: #9054e6;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (max-width: 1200px) {
    padding: 60px 0;
  }
`
export const HomeRoyaltyContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
  }
`

export const HomeRoyaltyIllu = styled.div`
  min-width: 525px;
  height: 516px;
  margin-right: 4rem;
  @media (max-width: 1200px) {
    min-width: 360px;
    height: 370px;
    margin-right: 60px;
  }
  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`
export const HomeRoyaltyText = styled.span`
  color: #ffffff;
  font-size: 26px;
  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 32px;
  }
`
export const HomeRoyaltyDiff = styled.span`
  color: #f9e235;
  font-size: 26px;
  text-decoration: underline;
`

export const HomeAsks = styled.div`
  background-color: #1d1d1d;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (max-width: 1200px) {
    padding: 60px 0;
  }
`

export const HomeAsksTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 1420px;
  height: 465px;
  position: relative;
  @media (max-width: 1450px) {
    width: 950px;
    height: 320px;
  }

  @media (max-width: 992px) {
    width: 550px;
    height: 220px;
  }
`
export const HomeAsksSpan = styled.span`
  z-index: 2;
  text-align: center;
  font-size: 38px;
  margin-bottom: 3rem;
  @media (max-width: 1450px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  @media (max-width: 992px) {
    font-size: 22px;
    margin-bottom: 35px;
  }
`
export const HomeAsksImage = styled(Image)`
  position: absolute;
  top: 0;
  left0: ;
`
export const HomeAsksInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeAsksInfoAddition = styled.p`
  color: #fff;
  font-size: 26px;
  $:not(:last-child) {
    margin-bottom: 40px;
  }
  @media (max-width: 1200px) {
    font-size: 32px;
  }

  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 32px;
  }
`
export const HomeAsksInfoTitle = styled.h5`
  color: #f9e235;
  font-size: 26px;
  display: inline-block;
  margin-bottom: 3rem;
  @media (max-width: 1200px) {
    font-size: 32px;
  }

  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 32px;
  }
`
export const HomeAsksInfoList = styled.ul`
  flex-direction: column;
  display: flex;
  margin-bottom: 3rem;
`
export const HomeAsksInfoItem = styled.li`
  text-indent: 55px;
  color: #fff;
  font-size: 26px;
  align-items: center;
  display: flex;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 55px;
  }
  @media (max-width: 1200px) {
    font-size: 32px;
  }
  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 32px;
    text-indent: 45px;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`
export const HomeBenefits = styled.div`
  background-color: #1d1d1d;
  padding-bottom: 8rem;
  @media (max-width: 1200px) {
    padding-bottom: 100px;
  }
`
export const HomeBenefitsTitle = styled.div`
  width: 735px;
  height: 178px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 5rem;
  position: relative;
  @media (max-width: 1200px) {
    margin-bottom: 100px;
  }
`
export const HomeBenefitsSpan = styled.span`
  z-index: 2;
  max-width: 400px;
  color: #000;
  font-size: 44px;
  text-align: center;
  position: relative;
`
export const HomeBenefitsList = styled.ul`
  justify-content: space-between;
  width: 100%;
  display: flex;
`
export const HomeBenefitsItem = styled.ul`
  width: calc(100% / 5);
  align-items: center;
  flex-direction: column;
  display: flex;
`

export const HomeBenefitsItemTop = styled.div`
  display: flex;
  justify-content: center;
  align-itmes: center;
  width: 200px;
  min-height: 245px;
  margin-bottom: 35px;
  @media (max-width: 1300px) {
    max-width: 240px;
  }
  @media (max-width: 1100px) {
    max-width: 180px;
  }
`
export const HomeBenefitsItemBottom = styled.div`
  width: 100%;
  padding: 45px 40px 35px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 100%;
  flex: 1 1 100%;
  background-color: ${(p) => p.background};
  @media (max-width: 1770px) {
    padding: 25px;
  }
  @media (max-width: 1450px) {
    padding: 10px;
  }

  @media (max-width: 576px) {
    padding: 5px;
  }
`
export const HomeBenefitsItemBottomSpan = styled.span`
  color: #fff;
  font-size: 20px;
  text-align: center;

  @media (max-width: 1770px) {
    font-size: 18px;
  }

  @media (max-width: 1450px) {
    font-size: 14px;
  }

  @media (max-width: 992px) {
    font-size: 1.81vw;
    line-height: 2.02vw;
  }
  @media (max-width: 576px) {
    font-size: 3.02vw;
    line-height: 3.43vw;
  }
`

export const HomeRoadmap = styled.div`
  overflow: hidden;
  background-color: #ef3f89;
`

export const HomeRoadmapContent = styled.div`
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  display: flex;
  position: relative;
`

export const HomeRoadmapIllu = styled.div`
  width: 43%;
  height: 100%;
  position: absolute;
`
export const HomeRoadmapInfo = styled.div`
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  display: flex;
`

export const HomeRoadmapInfoTitle = styled.h3`
  color: #fff;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 82px;
  display: inline-block;
  margin-bottom: 6rem;
  @media (max-width: 1400px) {
    font-size: 70px;
    margin-bottom: 30px;
  }
  .@media (max-width: 1200px) {
    font-size: 55px;
  }
`

export const HomeRoadmapInfoText = styled.div`
  max-width: 900px;
  @media (max-width: 1500px) {
    max-width: 620px;
  }

  @media (max-width: 1200px) {
    max-width: 510px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    margin-left: 25px;
  }
`

export const HomeRoadmapInfoTextP = styled.p`
  color: #fff;
  &:before {
    position: absolute;
    top: 15px;
    left: -20px;
    width: 10px;
    height: 10px;
    content: '';
    border-radius: 50%;
    background-color: #fff;
  }
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  @media (max-width: 1500px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }

  @media (max-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 25px;
    }
    font-size: 22px;
  }
  @media (max-width: 992px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 26px;
  }
`

// ------------------------ Footer -------------------------
export const FooterWrap = styled.div`
  padding: 50px 0;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
`
export const Copyright = styled.div`
  color: #ffffff;
  font-size: 31px;
  @media (max-width: 992px) {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    font-size: 22px;
  }
`

export const SocialWrap = styled.div`
  display: flex;
  @media (max-width: 992px) {
  }
`

export const SocialItem = styled.a`
  min-width: 70px;
  max-width: 70px;
  height: 73px;
  margin-right: 30px;
  @media (max-width: 992px) {
  }
`
