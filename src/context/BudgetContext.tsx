import { useReducer, createContext, Dispatch, ReactNode } from 'react'
import {
  budgetReducer,
  BudgetState,
  initialState,
  BudgetActions,
} from '../reducers/budget-reducer'

type BudgetContextProps = {
  state: BudgetState
  dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
  children : ReactNode
}

//Context es la accion de tener los datos de forma global
export const BudgetContext = createContext<BudgetContextProps>(
  {} as BudgetContextProps
)

//El provider son los datos que vamos a tener dentro
export const BudgetProvider = ({ children } : BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  )
}
