import React from "react";
import { DraggableContainer, DraggableChild } from 'react-dragline';


class Example extends React.Component {
  state = [
    { id: 1, position: {x: 100, y: 10} },
    { id: 2, position: {x: 400, y: 200} },
  ]

  render() {
    const containerStyle = {
      height: 600,
      position: 'relative',
    }

    return (
      <DraggableContainer style={containerStyle}>
        {
          this.state.children.map(({ id, position }, index) => {
            const style = {
              width: 100,
              height: 100,
              cursor: 'move',
              background: '#8ce8df',
            }

            return (
              <DraggableChild key={id} defaultPosition={position}>
                <div style={style} />
              </DraggableChild>
            )
          })
        }
      </DraggableContainer>
    )
  }
}

export default Example;