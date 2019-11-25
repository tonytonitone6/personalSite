import {css} from 'styled-components'

// export const lg =
export const width = 4
export const columns = 12

export const row = css`
  display: flex;
`

export const col1 = css`
  flex: 0 0 calc(1 / ${columns} * 100%);

  @media (max-width: 992px) {
    flex: 0 0 calc(4 / ${columns} * 100%);
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(6 / ${columns} * 100%);
  }

  @media (max-width: 576px) {
    flex: 0 0 calc(12 / ${columns} * 100%);
  }
`

export const col2 = css`
  flex: 0 0 calc(2 / ${columns} * 100%);

  @media (max-width: 576px) {
    flex: 0 0 calc(6 / ${columns} * 100%);
  }
`

export const col4 = css`
  flex: 0 0 calc(4 / ${columns} * 100%);

  @media (max-width: 576px) {
    flex: 0 0 calc(12 / ${columns} * 100%);
  }
`

export const col6 = css`
  flex: 0 0 calc(6 / ${columns} * 100%);
  @media (max-width: 576px) {
    flex: 0 0 calc(12 / ${columns} * 100%);
  }
`

export const col8 = css`
  flex: 0 0 calc(8 / ${columns} * 100%);

  @media (max-width: 576px) {
    flex: 0 0 calc(12 / ${columns} * 100%);
  }
`
