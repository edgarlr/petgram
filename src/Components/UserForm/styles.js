import styled from 'styled-components'
import { TitleColor, SubtitleColor } from '../../styles/Theme'

export const Div = styled.div`
  padding: 0 10px;
  margin-top: 15%;
`

export const Form = styled.form`
  padding-bottom: 20px;
`

export const Label = styled.label`
  color: ${SubtitleColor};
  font-size: 0.8em;
`

export const Input = styled.input`
  color: ${SubtitleColor};
  background-color: transparent;
  border: 1px solid #ccc;
  font-size: 1em;
  border-radius: 5px;
  margin-bottom: 1em;
  padding: .8em 10px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
  &::placeholder{
    color: ${SubtitleColor};
    opacity: .6;
  }
`

export const Title = styled.h2`
  font-size: 1.1em;
  font-weight: Bold;
  margin: 0 0 .5em;
  color: ${TitleColor};
  text-align: center;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`
