interface expenses {
  id : number,
  description : string,
  category : string,
  amount : number
}



interface Props {
   expenses : expenses[],
   onDelete : (id : number) => void
   
}




const ExpenseForm = ({expenses, onDelete} : Props) => {



   if (expenses.length === 0) return null

  return <> 
  
  <table className="table table-bordered">
    <thead>
        <tr>
            <th>Items Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
        </tr>
    </thead>

    <tbody>
        
           {expenses.map(expens => <tr className="mb-3" key={expens.id}>
            <td>{expens.description}</td>
            <td>{expens.category}</td>
            <td>{expens.amount}</td>
            <td><button className="btn btn-outline-danger" onClick={()=> {onDelete(expens.id)}}>Delete</button></td>
             </tr>)}
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>${expenses.reduce((acc, expense)=> expense.amount + acc , 0).toFixed(2)}</td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
  
  </>
  }
export default ExpenseForm