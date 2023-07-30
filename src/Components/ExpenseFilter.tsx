import Categories from "../Categories"


interface Props {
    SelectedCategory : (category : string) => void
}


const ExpenseFilter = ({SelectedCategory} : Props) => {
  return (
        <div className="mb-3">
            <select className="form-control" onChange={(event) => {SelectedCategory(event.target.value)}} >
                <option>All Categories</option>
                {Categories.map(Categorie => <option key={Categorie} value={Categorie}> {Categorie}</option>)}
            </select>
        </div>
  )
}

export default ExpenseFilter