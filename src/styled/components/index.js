import styled from 'styled-components'

const cursor = require('/src/resources/images/gun-shooting-target.png')

const Cursor = styled.div.attrs({
  style: ({ mouseX, mouseY }) => ({
    transform: `translate(${mouseX - 15}px, ${mouseY - 15}px)`,
  }),
})`
  background: url(${cursor});
  cursor: none;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
`

export { Cursor }
