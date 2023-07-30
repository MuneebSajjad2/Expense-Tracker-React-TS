import { useState } from "react"
import ExpenseList from "./Components/ExpenseList"
import ExpenseFilter from "./Components/ExpenseFilter"
import ExpenseForm from "./Components/ExpenseForm"






function App() {

const [selectedCategory, setselectedCategory] = useState('')

  const [expenses, setExpenses] = useState([
    {id:1, description: 'Electricity Bills', category: 'utility', amount : 45 },
    {id:2, description: 'Electricity Bills', category: 'utility', amount : 45 },
    {id:3, description: 'Electricity Bills', category: 'utility', amount : 45 }
  ])



  const visibleExpense = selectedCategory ?
  expenses.filter((e) => e.category === selectedCategory) : expenses;
  


  return <>
    <div className="mb-3">
      <ExpenseForm onSubmit = {expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
    </div>

    <div className="mb-3">
      <ExpenseFilter SelectedCategory = {category => setselectedCategory(category)} />
    </div>
    <div className="mb-3"> 

        <ExpenseList  expenses = {visibleExpense} onDelete={(id) => {setExpenses(expenses.filter(e => e.id !== id))}} />
    </div>
    
  
  </>
  }
export default App;
