import React, {FunctionComponent} from 'react'
import {ExpContainer, CardRow, CardTime, CardDetail} from './styles'

const Experience: FunctionComponent = (): JSX.Element => {
  return (
    <ExpContainer>
      <CardRow>
        <CardTime>2015年12月 - 2017年5月</CardTime>
        {/* <CardIcon>

        </CardIcon> */}
        <CardDetail>Pegatron corp. Software Engineer</CardDetail>
      </CardRow>
      <CardRow>
        <CardTime>2017年8月 - 2020/2月</CardTime>
        {/* <CardIcon>

        </CardIcon> */}
        <CardDetail>NextDigital corp. Software Engineer</CardDetail>
      </CardRow>
      <CardRow>
        <CardTime>2020年2月</CardTime>
        {/* <CardIcon>

        </CardIcon> */}
        <CardDetail>test</CardDetail>
      </CardRow>
    </ExpContainer>
  )
}

export default Experience
