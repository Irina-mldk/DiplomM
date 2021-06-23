import styled from 'styled-components'
import {SwiperSlide, Swiper} from 'swiper/react'
import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


const Slide = styled(SwiperSlide)`
  width: 40px;
`

const StyledSwiper = styled(Swiper)`
  max-width: 860px;
  margin-left: 0 !important;
  margin-right: 0 !important;
  > * {
    padding-right: 2px;
    > * {
      width: unset !important;
    }
    > * + * {
      margin-left: 10px;
    }
  }
  ${MEDIA_QUERIES.xl} {
    max-width: 100%;
  }
`

export {
  Slide,
  StyledSwiper
}
