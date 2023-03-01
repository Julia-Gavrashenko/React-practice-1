import React from "react";

export const Controls = ({onIncrement, onDecrement}) => (
   <div className="Counter__controls">
          <button type="button" onClick={onIncrement}>
            Level up
          </button>
          <button type="button" onClick={onDecrement}>
            Level down
          </button>
        </div> 
)

// щоб методи класу Counter стали доступні в компоненті Controls їх треба передати як пропси. Це підняття стану